from kybra import update, Principal, Text, query
from real_estate.types import properties
from typing import List
from time import time
transactions: List[dict] = []


@update
def transfer_property(property_id: Text, new_owner: Principal) -> Text:
    for property in properties:
        if property.id == property_id:
            if property.owner != Principal.from_actor():
                return "You are not the owner"
            property.owner = new_owner
            transactions.append({
                'property_id': property_id,
                'from': Principal.from_actor(),
                'to': new_owner,
                'timestamp': time(),
            })
            return "Property transferred"
    return "Property not found"


@query
def get_transaction_history() -> List[dict]:
    return transactions
