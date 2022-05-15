/* eslint-disable */
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'telele.type';

export enum Sex {
  SEX_UNKNOWN = 0,
  MALE = 1,
  FEMALE = 2,
  OTHER = 3,
  UNRECOGNIZED = -1,
}

export const TELELE_TYPE_PACKAGE_NAME = 'telele.type';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
