import secrets
from kybra import (
    blob,
    CallResult,
    init,
    void,
    Func,
    ic,
    match,
    nat16,
    nat32,
    Opt,
    Principal,
    query,
    Query,
    Record,
    StableBTreeMap,
    Tuple,
    update,
    Variant,
    Vec,
    text,
    Async,
)
from kybra.canisters.management import (
    HttpResponse as CanisterHttpResponse,
    HttpTransformArgs,
    management_canister,
)


# Define HTTP Request and Response records
class HttpRequest(Record):
    method: str
    url: str
    headers: Vec[Tuple[str, str]]
    body: blob


class HttpResponse(Record):
    status_code: nat16
    headers: Vec[Tuple[str, str]]
    body: blob
    streaming_strategy: Opt["StreamingStrategy"]
    upgrade: Opt[bool]


class StreamingStrategy(Variant):
    Callback: "CallbackStrategy"


class CallbackStrategy(Record):
    callback: "Callback"
    token: "Token"


Callback = Func(Query[["Token"], "StreamingCallbackHttpResponse"])


class StreamingCallbackHttpResponse(Record):
    body: blob
    token: Opt["Token"]


class Token(Record):
    arbitrary_data: str


# Define User and Property records
class User(Record):
    id: Principal
    name: text
    email: text
    roles: Vec[text]
    mfa_enabled: bool


class Property(Record):
    id: text
    owner: Principal
    value: nat32
    location: text
    description: text
    for_sale: bool
    media: Vec[text]


# Define StableBTreeMap for storing users and properties
users = StableBTreeMap[Principal, User](
    memory_id=0, max_key_size=38, max_value_size=100_000
)
properties = StableBTreeMap[text, Property](
    memory_id=1, max_key_size=100, max_value_size=1_000_000
)


# User management functions
@update
def register_user(name: text, email: text, roles: Vec[text] = []) -> text:
    caller = ic.caller()
    if users.contains_key(caller):
        return "User already registered"
    new_user = User(id=caller, name=name, email=email, roles=roles, mfa_enabled=False)
    users.insert(caller, new_user)
    return "User registered successfully"


@query
def get_users() -> Vec[User]:
    return users.values()


@query
def get_user(id: Principal) -> Opt[User]:
    return users.get(id)


class DeleteUserResult(Variant, total=False):
    Ok: User
    Err: "DeleteUserErr"


class DeleteUserErr(Variant, total=False):
    UserDoesNotExist: Principal


@update
def delete_user(id: Principal) -> DeleteUserResult:
    user = users.get(id)
    if user is None:
        return {"Err": {"UserDoesNotExist": id}}
    users.remove(id)
    return {"Ok": user}


# Property management functions
@update
def create_property(
    value: nat32,
    location: text,
    description: text,
    for_sale: bool,
    media: Vec[text],
) -> text:
    id = secrets.token_hex(16)
    owner = ic.caller()
    if properties.contains_key(id):
        return "Property already exists"
    new_property = Property(
        id=id,
        owner=owner,
        value=value,
        location=location,
        description=description,
        for_sale=for_sale,
        media=media,
    )
    properties.insert(id, new_property)
    return "Property created successfully"


@query
def get_properties() -> Vec[Property]:
    return properties.values()


@query
def get_property(id: text) -> Opt[Property]:
    return properties.get(id)


class DeletePropertyResult(Variant, total=False):
    Ok: Property
    Err: "DeletePropertyErr"


class DeletePropertyErr(Variant, total=False):
    PropertyDoesNotExist: text


@update
def delete_property(id: text) -> DeletePropertyResult:
    property = properties.get(id)
    if property is None:
        return {"Err": {"PropertyDoesNotExist": id}}
    properties.remove(id)
    return {"Ok": property}


# Transaction management functions
class Transaction(Record):
    property_id: text
    from_: Principal
    to: Principal
    timestamp: nat32


transactions = StableBTreeMap[text, Transaction](
    memory_id=2, max_key_size=100, max_value_size=1_000
)


@update
def create_transaction(property_id: text, to: Principal) -> text:
    from_ = ic.caller()
    property = properties.get(property_id)
    if property is None or property["owner"] != from_:
        return "Transaction failed: Property does not exist or you are not the owner"
    transaction = Transaction(
        property_id=property_id, from_=from_, to=to, timestamp=ic.time()
    )
    transactions.insert(f"{property_id}_{ic.time()}", transaction)
    # Transfer ownership
    updated_property = Property(
        id=property["id"],
        owner=to,
        value=property["value"],
        location=property["location"],
        description=property["description"],
        for_sale=property["for_sale"],
        media=property["media"],
    )
    properties.insert(property["id"], updated_property)
    return "Transaction successful"


@query
def get_transactions() -> Vec[Transaction]:
    return transactions.values()


@query
def get_transaction(id: text) -> Opt[Transaction]:
    return transactions.get(id)


# HTTP request handler
@query
def http_request(req: HttpRequest) -> HttpResponse:
    return {
        "status_code": 200,
        "headers": [],
        "body": bytes(),
        "streaming_strategy": void,
        "upgrade": False,
    }


# Outgoing HTTP requests
stable_storage = StableBTreeMap[str, str](
    memory_id=3, max_key_size=20, max_value_size=1_000
)


@init
def init_(external_url: str) -> None:
    stable_storage.insert("external_url", external_url)


@update
def external_get_request(endpoint: str) -> Async[text]:
    http_result: CallResult[
        CanisterHttpResponse
    ] = yield management_canister.http_request(
        {
            "url": f"{stable_storage.get('external_url')}{endpoint}",
            "max_response_bytes": 2_000,
            "method": {"get": None},
            "headers": [],
            "body": bytes(),
            "transform": {
                "function": (ic.id(), "transform_response"),
                "context": bytes(),
            },
        }
    ).with_cycles(50_000_000)

    return match(
        http_result,
        {"Ok": lambda ok: ok["body"].decode("utf-8"), "Err": lambda err: ic.trap(err)},
    )


@query
def transform_response(args: HttpTransformArgs) -> CanisterHttpResponse:
    http_response = args["response"]
    http_response["headers"] = []
    return http_response


@update
def external_post_request(endpoint: str, payload: text) -> Async[text]:
    http_result: CallResult[
        CanisterHttpResponse
    ] = yield management_canister.http_request(
        {
            "url": f"{stable_storage.get('external_url')}{endpoint}",
            "max_response_bytes": 2_000,
            "method": {"post": None},
            "headers": [("Content-Type", "application/json")],
            "body": payload.encode("utf-8"),
            "transform": {
                "function": (ic.id(), "transform_response"),
                "context": bytes(),
            },
        }
    ).with_cycles(50_000_000)

    return match(
        http_result,
        {"Ok": lambda ok: ok["body"].decode("utf-8"), "Err": lambda err: ic.trap(err)},
    )
