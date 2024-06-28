import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Property {
  'id' : string,
  'media' : Array<string>,
  'value' : bigint,
  'owner' : Principal,
  'description' : string,
  'for_sale' : boolean,
  'location' : string,
}
export interface _SERVICE {
  'add_property' : ActorMethod<
    [string, bigint, string, string, Array<string>],
    string
  >,
  'enable_mfa' : ActorMethod<[], string>,
  'get_properties' : ActorMethod<[], Array<Property>>,
  'register_user' : ActorMethod<[string, string, Array<string>], string>,
  'update_property_status' : ActorMethod<[string, boolean], string>,
  'update_property_valuation' : ActorMethod<[string, bigint], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
