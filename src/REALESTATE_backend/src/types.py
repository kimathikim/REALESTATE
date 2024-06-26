from kybra import record, Principal, nat, Text, Vec

Property = record({
    'id': Text,
    'owner': Principal,
    'value': nat,
    'location': Text,
    'description': Text,
    'for_sale': bool,
    'media': Vec[Text],
})


User = record({
    'id': Principal,
    'name': str,
    'email': str,
    'roles': Vec[str],
    'mfa_enabled': bool,
})

Transaction = record({
    'property_id': Text,
    "from": Principal,
    "to": Principal,
    "timestamp": nat
})
