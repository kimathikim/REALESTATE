export const idlFactory = ({ IDL }) => {
  const Property = IDL.Record({
    'id' : IDL.Text,
    'media' : IDL.Vec(IDL.Text),
    'value' : IDL.Nat,
    'owner' : IDL.Principal,
    'description' : IDL.Text,
    'for_sale' : IDL.Bool,
    'location' : IDL.Text,
  });
  const DeletePropertyErr = IDL.Variant({ 'PropertyDoesNotExist' : IDL.Text });
  const DeletePropertyResult = IDL.Variant({
    'Ok' : Property,
    'Err' : DeletePropertyErr,
  });
  const User = IDL.Record({
    'id' : IDL.Principal,
    'mfa_enabled' : IDL.Bool,
    'name' : IDL.Text,
    'email' : IDL.Text,
    'roles' : IDL.Vec(IDL.Text),
  });
  const DeleteUserErr = IDL.Variant({ 'UserDoesNotExist' : IDL.Principal });
  const DeleteUserResult = IDL.Variant({ 'Ok' : User, 'Err' : DeleteUserErr });
  const Transaction = IDL.Record({
    'to' : IDL.Principal,
    'from' : IDL.Principal,
    'property_id' : IDL.Text,
    'timestamp' : IDL.Nat,
  });
  return IDL.Service({
    'create_property' : IDL.Func(
        [IDL.Nat, IDL.Text, IDL.Text, IDL.Bool, IDL.Vec(IDL.Text)],
        [IDL.Text],
        [],
      ),
    'create_transaction' : IDL.Func([IDL.Text, IDL.Principal], [IDL.Text], []),
    'delete_property' : IDL.Func([IDL.Text], [DeletePropertyResult], []),
    'delete_user' : IDL.Func([IDL.Principal], [DeleteUserResult], []),
    'get_properties' : IDL.Func([], [IDL.Vec(Property)], ['query']),
    'get_property' : IDL.Func([IDL.Text], [IDL.Opt(Property)], ['query']),
    'get_transaction' : IDL.Func([IDL.Text], [IDL.Opt(Transaction)], ['query']),
    'get_transactions' : IDL.Func([], [IDL.Vec(Transaction)], ['query']),
    'get_user' : IDL.Func([IDL.Principal], [IDL.Opt(User)], ['query']),
    'get_users' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'register_user' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Vec(IDL.Text)],
        [IDL.Text],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
