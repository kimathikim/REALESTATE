from typing import List, Dict, Optional
from kybra.canisters.management import (
    HttpResponse,
    HttpTransformArgs,
    management_canister,
)
from kybra import (
    V,
    Async,
    ValueTooLarge,
    blob,
    CallResult,
    ic,
    match,
    Principal,
    query,
    update,
    Manual,
    Record,
    Vec,
    nat,
    text,
    Tuple,
    Opt,
    Variant,
    Func,
    Query,
)
from typing import Set


Header = Tuple[str, str]

Callback = Func(Query[["Token"], "StreamingCallbackHttpResponse"])


class Token(Record):
    arbitrary_data: str


class StreamingStrategy(Variant):
    Callback: "CallbackStrategy"


class CallbackStrategy(Record):
    callback: "Callback"
    token: "Token"


class StreamingCallbackHttpResponse(Record):
    body: blob
    token: Opt["Token"]


class Property(Record):
    id: str
    owner: Principal
    value: int
    location: str
    description: str
    for_sale: bool
    media: Vec[str]


properties: List[Property] = []


class User(Record):
    id: Principal
    name: text
    email: text
    roles: Vec[text]
    mfa_enabled: bool


users: Dict[Principal, User] = {}


class Transaction(Record):
    property_id: text
    froim: Principal
    to: Principal
    timestamp: nat


@update
def add_property(
    id: str, value: nat, location: str, description: str, media: Vec[str]
) -> str:
    caller = ic.caller()
    if not isinstance(id, str):
        id = str(id)
    else:
        new_property = Property(
            id=id,
            owner=caller,
            value=value,
            location=location,
            description=description,
            for_sale=True,
            media=media,
        )
        properties.append(new_property)
    return "Property added"


@update
def update_property_valuation(property_id: str, new_value: nat) -> str:
    for property in properties:
        if property["id"] == property_id:
            property["value"] = new_value
            return "Property valuation updated"
    return "Property not found"


# function to update the property status
@update
def update_property_status(property_id: str, status: bool) -> str:
    for property in properties:
        if property["id"] == property_id:
            property["for_sale"] = status
            return "Property status updated"
    return "Property not found"


@query
def get_properties() -> Vec[Property]:
    return properties


@update
def register_user(name: str, email: str, roles: Vec[str] = []) -> str:
    caller = ic.caller()
    print(caller)
    if caller in users:
        return "User already registered"

    new_user = User(id=caller, name=name, email=email, roles=roles, mfa_enabled=False)
    users[caller] = new_user
    return "User registered successfully"


@update
def enable_mfa() -> str:
    caller = ic.caller()
    print(caller)
    user = users.get(caller)
    if user and user["mfa_enabled"] is True:
        return "MFA enabled"
    return "User not found"


#
# @query
# def get_user():
#     caller = ic.caller()
#     return users.get(caller)
