from kybra import query, update, Principal, Vec, Record, ic
from typing import Dict, Optional, TypedDict


class User(Record):
    id: Principal
    name: str
    email: str
    roles: Vec[str]
    mfa_enabled: bool


# Dictionary to store users
users: Dict[Principal, User] = {}


@update
def register_user(name: str, email: str, roles: Vec[str] = []) -> str:
    caller = ic.caller()
    if caller in users:
        return "User already registered"

    new_user = User(id=caller, name=name, email=email,
                    roles=roles, mfa_enabled=False)
    users[caller] = new_user
    return "User registered successfully"


@update
def enable_mfa() -> str:
    caller = ic.caller()
    user = users.get(caller)
    if user:
        user.mfa_enabled = True
        return "MFA enabled"
    return "User not found"


@query
def get_user() -> Optional[User]:
    caller = ic.caller()
    return users.get(caller)
