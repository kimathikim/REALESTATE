from kybra import record, Principal, nat, text, Vec

Property = record({
    'id': text,
    'owner': Principal,
    'value': nat,
    'location': text,
    'description': text,
    'for_sale': bool,
    'media': Vec[text],
})


User = record({
    'id': Principal,
    'name': str,
    'email': str,
    'roles': Vec[str],
    'mfa_enabled': bool,
})

Transaction = record({
    'property_id': text,
    "from": Principal,
    "to": Principal,
    "timestamp": nat
})
