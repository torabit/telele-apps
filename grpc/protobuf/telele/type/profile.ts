/* eslint-disable */
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Sex } from '../../telele/type/gender';
import { Color } from '../../google/type/color';
import { DateMessage } from '../../google/type/date';
import { TimeOfDay } from '../../google/type/timeofday';
import { Timestamp } from '../../google/protobuf/timestamp';
import { FollowGameId } from '../../telele/type/follow_game';

export const protobufPackage = 'telele.type';

export interface Profile {
  id: string;
  userId: string;
  name: string;
  genderId: Sex;
  personalColor: Color | undefined;
  biography: string;
  birthday: DateMessage | undefined;
  startTime: TimeOfDay | undefined;
  endTime: TimeOfDay | undefined;
  createdAt: Timestamp | undefined;
  updatedAt: Timestamp | undefined;
  deletedAt: Timestamp | undefined;
  profileIconPath?: string | undefined;
}

export interface UserMetadata {
  userId: string;
  name: string;
  profileIconPath?: string | undefined;
}

export interface DogTag {
  userId: string;
  name: string;
  biography: string;
  followGames?: FollowGameIds | undefined;
  profileIconPath?: string | undefined;
}

export interface FollowGameIds {
  ids: FollowGameId[];
}

export const TELELE_TYPE_PACKAGE_NAME = 'telele.type';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
