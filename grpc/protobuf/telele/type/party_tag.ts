/* eslint-disable */
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'telele.type';

export interface PartyTag {
  partyId: number;
  tagId: number;
  createdAt: Timestamp | undefined;
  updatedAt: Timestamp | undefined;
  deletedAt: Timestamp | undefined;
}

export const TELELE_TYPE_PACKAGE_NAME = 'telele.type';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
