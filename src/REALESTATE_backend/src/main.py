from kybra.canisters.management import (
    HttpResponse,
    HttpTransformArgs,
    management_canister,
)
from kybra import (
    Async,
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


Property = Record(
    {
        "id": str,
        "owner": Principal,
        "value": nat,
        "location": str,
        "description": str,
        "for_sale": bool,
        "media": Vec[str],
    }
)
#
# User = Record(
#     {
#         "id": Principal,
#         "name": str,
#         "email": str,
#         "roles": Vec[str],
#         "mfa_enabled": bool,
#     }
# )
#
# Transaction = Record(
#     {
#         "property_id": str,
#         "from": Principal,
#         "to": Principal,
#         "timestamp": nat,
#     }
# )
