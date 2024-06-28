export const idlFactory = ({ IDL }) => {
  const Property = IDL.Record({
    'id' : IDL.Text,
    'media' : IDL.Vec(IDL.Text),
    'value' : IDL.Int,
    'owner' : IDL.Principal,
    'description' : IDL.Text,
    'for_sale' : IDL.Bool,
    'location' : IDL.Text,
  });
  return IDL.Service({
    'add_property' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Text, IDL.Text, IDL.Vec(IDL.Text)],
        [IDL.Text],
        [],
      ),
    'enable_mfa' : IDL.Func([], [IDL.Text], []),
    'get_properties' : IDL.Func([], [IDL.Vec(Property)], ['query']),
    'register_user' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Vec(IDL.Text)],
        [IDL.Text],
        [],
      ),
    'update_property_status' : IDL.Func([IDL.Text, IDL.Bool], [IDL.Text], []),
    'update_property_valuation' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
