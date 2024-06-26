from kybra import query, update, Principal, Vec
from typing import Dict, Optional, User
users: Dict[Principal, User] = {}


@update
def register_user(name: str, email: str, roles: Vec[str] = []) -> str:
    caller = Principal.from_actor()
    if caller in users:
        return "User already registered"
    new_user = User(id=caller, name=name, email=email,
                    roles=roles, mfa_enabled=False)
    users[caller] = new_user
    return "User registered successfully"


@update
def enable_mfa() -> str:
    caller = Principal.from_actor()
    user = users.get(caller)
    if user:
        user.mfa_enabled = True
        return "MFA enabled"
    return "User not found"


@query
def get_user() -> Optional[User]:
    caller = Principal.from_actor()
    return users.get(caller)
