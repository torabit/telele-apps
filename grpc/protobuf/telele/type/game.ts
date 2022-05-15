/* eslint-disable */
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'telele.type';

export interface Game {
  id: number;
  languageCode: string;
  title: string;
  publisherId: number;
  description: string;
  releaseDate: Timestamp | undefined;
  createdAt: Timestamp | undefined;
  updatedAt: Timestamp | undefined;
  deletedAt: Timestamp | undefined;
  publisherName?: string | undefined;
  gameIconPath?: string | undefined;
}

export const TELELE_TYPE_PACKAGE_NAME = 'telele.type';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
