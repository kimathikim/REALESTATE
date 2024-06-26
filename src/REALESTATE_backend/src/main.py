from kybra import actor_class, init, query, \
    update, Principal, nat, vec, Text, HTTPRequest, HTTPResponse
from real_estate.types import Property, User, Transaction
from real_estate.auth import register_user, get_user, enable_mfa
from real_estate.property import add_property, \
    update_property_valuation, get_properties
from real_estate.transaction import transfer_property, get_transaction_history


@actor_class
class RealEstateToken:
    @init
    def init(self):
        pass

    @query
    def http_request(self, request: HTTPRequest) -> HTTPResponse:
        path = request.url_path()

        if path == "/api/properties":
            properties_list = get_properties()
            return HTTPResponse(200, str(properties_list))

        elif path == "/api/transactions":
            transaction_history = get_transaction_history()
            return HTTPResponse(200, str(transaction_history))

        return HTTPResponse(404, "Not Found")

    # User management endpoints
    @update
    def register_user(self, name: Text, email: Text) -> Text:
        return register_user(name, email)

    @query
    def get_user(self) -> User:
        return get_user()

    @update
    def enable_mfa(self) -> Text:
        return enable_mfa()

    # Property management endpoints
    @update
    def add_property(self, id: Text, value: nat, location: Text,
                     description: Text, media: vec[Text]) -> Text:
        return add_property(id, value, location, description, media)

    @update
    def update_property_valuation(self, property_id: Text,
                                  new_value: nat) -> Text:
        return update_property_valuation(property_id, new_value)

    @query
    def get_properties(self) -> vec[Property]:
        return get_properties()

    # Transaction endpoints
    @update
    def transfer_property(self, property_id: Text,
                          new_owner: Principal) -> Text:
        return transfer_property(property_id, new_owner)

    @query
    def get_transaction_history(self) -> vec[Transaction]:
        return get_transaction_history()
