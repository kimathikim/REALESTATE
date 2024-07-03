import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type DeletePropertyErr = { 'PropertyDoesNotExist' : string };
export type DeletePropertyResult = { 'Ok' : Property } |
  { 'Err' : DeletePropertyErr };
export type DeleteUserErr = { 'UserDoesNotExist' : Principal };
export type DeleteUserResult = { 'Ok' : User } |
  { 'Err' : DeleteUserErr };
export interface Property {
  'id' : string,
  'media' : Array<string>,
  'value' : bigint,
  'owner' : Principal,
  'description' : string,
  'for_sale' : boolean,
  'location' : string,
}
export interface Transaction {
  'to' : Principal,
  'from' : Principal,
  'property_id' : string,
  'timestamp' : bigint,
}
export interface User {
  'id' : Principal,
  'mfa_enabled' : boolean,
  'name' : string,
  'email' : string,
  'roles' : Array<string>,
}
export interface _SERVICE {
  'create_property' : ActorMethod<
    [bigint, string, string, boolean, Array<string>],
    string
  >,
  'create_transaction' : ActorMethod<[string, Principal], string>,
  'delete_property' : ActorMethod<[string], DeletePropertyResult>,
  'delete_user' : ActorMethod<[Principal], DeleteUserResult>,
  'get_properties' : ActorMethod<[], Array<Property>>,
  'get_property' : ActorMethod<[string], [] | [Property]>,
  'get_transaction' : ActorMethod<[string], [] | [Transaction]>,
  'get_transactions' : ActorMethod<[], Array<Transaction>>,
  'get_user' : ActorMethod<[Principal], [] | [User]>,
  'get_users' : ActorMethod<[], Array<User>>,
  'register_user' : ActorMethod<[string, string, Array<string>], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
