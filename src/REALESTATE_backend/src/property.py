from kybra import update, query, Principal, \
    nat, Vec
from real_estate.types import Property
from typing import List

properties: List[Property] = []


@update
def add_property(id: str, value: nat, location: str,
                 description: str, media: Vec[str]) -> str:
    caller = Principal.from_actor()
    new_property = Property(id=id, owner=caller,
                            value=value, location=location,
                            description=description,
                            for_sale=True, media=media)
    properties.append(new_property)
    return "Property added"


@update
def update_property_valuation(property_id: str, new_value: nat) -> str:
    for property in properties:
        if property.id == property_id:
            property.value = new_value
            return "Property valuation updated"
    return "Property not found"


@query
def get_properties() -> Vec[Property]:
    return properties
