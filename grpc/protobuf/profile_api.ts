/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';
import { Sex } from './telele/type/gender';
import { Color } from './google/type/color';
import { DateMessage } from './google/type/date';
import { TimeOfDay } from './google/type/timeofday';
import { FollowGame } from './telele/type/follow_game';
import { FollowUser } from './telele/type/follow_user';
import { DogTag, UserMetadata, Profile } from './telele/type/profile';
import { Metadata } from '@grpc/grpc-js';
import { Empty } from './google/protobuf/empty';
import { ProfileIcon } from './telele/type/profile_icon';

export const protobufPackage = 'telele.api';

export interface IntIds {
  ids: number[];
}

export interface StringIds {
  ids: string[];
}

/**
 * - search_optionにある1つのフィールドを検索してProfileを返します
 *  - profile_id  profile_idを受け取ります、これはユニークなフィールドです
 *  - user_id     user_idを受け取ります、これはユニークなフィールドです
 */
export interface GetProfileRequest {
  profileId: string | undefined;
  userId: string | undefined;
}

export interface CreateProfileRequest {
  userId: string;
  name: string;
  genderId?: Sex | undefined;
  personalColor?: Color | undefined;
  biography?: string | undefined;
  birthday?: DateMessage | undefined;
  startTime?: TimeOfDay | undefined;
  endTime?: TimeOfDay | undefined;
}

/**
 * - search_optionにある1つのフィールドを検索してProfileを1つ更新します
 *  - profile_id  profile_idを受け取ります、これはユニークなフィールドです
 *  - user_id     user_idを受け取ります、これはユニークなフィールドです
 */
export interface UpdateProfileRequest {
  profileId: string | undefined;
  userId: string | undefined;
  name?: string | undefined;
  genderId?: Sex | undefined;
  personalColor?: Color | undefined;
  biography?: string | undefined;
  birthday?: DateMessage | undefined;
  startTime?: TimeOfDay | undefined;
  endTime?: TimeOfDay | undefined;
}

/**
 * - search_optionにある1つのフィールドと一致するProfileを1つ削除します
 *  - profile_id  profile_idを受け取ります、これはユニークなフィールドです
 *  - user_id     user_idを受け取ります、これはユニークなフィールドです
 */
export interface DeleteProfileRequest {
  profileId: string | undefined;
  userId: string | undefined;
}

/**
 * - search_optionにある1つのフィールドを検索してuser_idを更新します
 *  - profile_id      profile_idを受け取ります、これはユニークなフィールドです
 *  - former_user_id  更新前のuser_idを受け取ります、これはユニークなフィールドです
 *
 * - updated_user_id 更新された新しいuser_idを受け取ります
 */
export interface UpdateUserIdOnProfileRequest {
  profileId: string | undefined;
  formerUserId: string | undefined;
  updatedUserId: string;
}

/** - profile_id profile_idを受け取ります、これはユニークなフィールドです */
export interface GetProfileIconRequest {
  profileId: string;
}

/**
 * - profile_id profile_idを受け取ります、これはユニークなフィールドです
 * - path       profile_iconのpathを受け取ります
 */
export interface CreateProfileIconRequest {
  profileId: string;
  path: string;
}

/**
 * - profile_id profile_idを受け取ります、これはユニークなフィールドです
 * - path       profile_iconのpathを受け取ります
 */
export interface UpdateProfileIconRequest {
  profileId: string;
  path: string;
}

/** - profile_id profile_idを受け取ります、これはユニークなフィールドです */
export interface DeleteProfileIconRequest {
  profileId: string;
}

/**
 * - search_optionにある1つのフィールドを検索してFollowGameの配列を返します
 *  - user_id user_idを受け取ります
 *  - game_id game_idを受け取ります
 */
export interface ListFollowGameRequest {
  userId: string | undefined;
  gameId: number | undefined;
}

export interface ListFollowGameResponse {
  followGames: FollowGame[];
}

/**
 * user_idとgame_idを受け取って新しいFollowGameを1つ作成します
 *  - user_id　user_idを受け取ります
 *  - game_id　game_idを受け取ります
 */
export interface CreateFollowGameRequest {
  userId: string;
  gameId: number;
}

/**
 * user_idとgame_idを受け取って新しいFollowGameを1つ削除します
 *  - user_id　user_idを受け取ります
 *  - game_id　game_idを受け取ります
 */
export interface DeleteFollowGameRequest {
  userId: string;
  gameId: number;
}

export interface BatchListFollowGameRequest {
  userIds: StringIds | undefined;
  gameIds: IntIds | undefined;
}

export interface BatchListFollowGameResponse {
  listFollowGames: FollowGames[];
}

export interface FollowGames {
  followGames: FollowGame[];
}

/**
 * - search_optionにある1つのフィールドを検索してFollowUserの配列を返します
 *  - user_id         user_idを受け取ります
 *  - follow_user_id  follow_user_idを受け取ります
 */
export interface ListFollowUserRequest {
  userId: string | undefined;
  followUserId: string | undefined;
}

export interface ListFollowUserResponse {
  followUsers: FollowUser[];
}

/**
 * user_idとfollow_user_idを受け取って新しいFollowUserを1つ作成します
 *  - user_id　       user_idを受け取ります
 *  - follow_user_id　follow_user_idを受け取ります
 */
export interface CreateFollowUserRequest {
  userId: string;
  followUserId: string;
}

/**
 * user_idとfollow_user_idを受け取って新しいFollowUserを1つ削除します
 *  - user_id　       user_idを受け取ります
 *  - follow_user_id　follow_user_idを受け取ります
 */
export interface DeleteFollowUserRequest {
  userId: string;
  followUserId: string;
}

/** user_idを受け取ります */
export interface GetDogTagRequest {
  userId: string;
}

/** user_idの配列を受け取ってDogTagの配列を返します */
export interface ListDogTagRequest {
  userIds: string[];
}

export interface ListDogTagResponse {
  dogTags: DogTag[];
}

/** user_idを受け取ります */
export interface GetUserMetadataRequest {
  userId: string;
}

/** user_idの配列を受け取ってMetadataの配列を返します */
export interface ListUserMetadataRequest {
  userIds: string[];
}

export interface ListUserMetadataResponse {
  userMetadata: UserMetadata[];
}

export const TELELE_API_PACKAGE_NAME = 'telele.api';

export interface ProfileApiClient {
  /** ユニークなフィールドを1つ受け取ってProfileを1つ返します */

  getProfile(request: GetProfileRequest, metadata?: Metadata): Observable<Profile>;

  /** Profileを作成します。user_id, nameが必須プロパティです */

  createProfile(request: CreateProfileRequest, metadata?: Metadata): Observable<Empty>;

  /** ユニークなフィールドを1つ受け取ってProfileを更新します */

  updateProfile(request: UpdateProfileRequest, metadata?: Metadata): Observable<Empty>;

  /** ユニークなフィールドを1つ受け取ってProfileを削除します */

  deleteProfile(request: DeleteProfileRequest, metadata?: Metadata): Observable<Empty>;

  /**
   * ユニークなフィールドを1つ受け取ってProfileにあるold_user_idをnew_user_idへ更新します
   * user_idを変更したいときに利用してください
   */

  updateUserIdOnProfile(
    request: UpdateUserIdOnProfileRequest,
    metadata?: Metadata
  ): Observable<Empty>;

  /** profile_idを1つ受け取ってprofile_iconを１つ返します */

  getProfileIcon(request: GetProfileIconRequest, metadata?: Metadata): Observable<ProfileIcon>;

  /** profile_idとPathを受け取ってprofile_iconを1つ作成します */

  createProfileIcon(request: CreateProfileIconRequest, metadata?: Metadata): Observable<Empty>;

  /** profile_idとPathを受け取ってprofile_iconを1つ更新します */

  updateProfileIcon(request: UpdateProfileIconRequest, metadata?: Metadata): Observable<Empty>;

  /** profile_idを受け取ってprofile_iconを1つ削除します */

  deleteProfileIcon(request: DeleteProfileIconRequest, metadata?: Metadata): Observable<Empty>;

  /** user_idまたはgame_idを受け取ってFollowGameの配列を返します */

  listFollowGame(
    request: ListFollowGameRequest,
    metadata?: Metadata
  ): Observable<ListFollowGameResponse>;

  /** user_idとgame_idを受け取ってあたらしいFollowGameを作成します */

  createFollowGame(request: CreateFollowGameRequest, metadata?: Metadata): Observable<Empty>;

  /** user_idとgame_idから成る結合キーに一致するFollowGameを1つ削除します */

  deleteFollowGame(request: DeleteFollowGameRequest, metadata?: Metadata): Observable<Empty>;

  batchListFollowGame(
    request: BatchListFollowGameRequest,
    metadata?: Metadata
  ): Observable<BatchListFollowGameResponse>;

  /** user_idまたはfollow_user_idを受け取ってFollowUserの配列を返します */

  listFollowUser(
    request: ListFollowUserRequest,
    metadata?: Metadata
  ): Observable<ListFollowUserResponse>;

  /** user_idとfollow_user_idを受け取ってあたらしいFollowUserを作成します */

  createFollowUser(request: CreateFollowUserRequest, metadata?: Metadata): Observable<Empty>;

  /** user_idとfollow_user_idから成る結合キーに一致するFollowUserを1つ削除します */

  deleteFollowUser(request: DeleteFollowUserRequest, metadata?: Metadata): Observable<Empty>;

  /** user_idを受け取ってDogTag単体を返します */

  getDogTag(request: GetDogTagRequest, metadata?: Metadata): Observable<DogTag>;

  /** user_idの配列を受け取ってDogTagの配列を返します */

  listDogTag(request: ListDogTagRequest, metadata?: Metadata): Observable<ListDogTagResponse>;

  /** user_idを受け取ってMetadata単体を返します */

  getUserMetadata(request: GetUserMetadataRequest, metadata?: Metadata): Observable<UserMetadata>;

  /** user_idの配列を受け取ってMetadataの配列を返します */

  listUserMetadata(
    request: ListUserMetadataRequest,
    metadata?: Metadata
  ): Observable<ListUserMetadataResponse>;
}

export interface ProfileApiController {
  /** ユニークなフィールドを1つ受け取ってProfileを1つ返します */

  getProfile(
    request: GetProfileRequest,
    metadata?: Metadata
  ): Promise<Profile> | Observable<Profile> | Profile;

  /** Profileを作成します。user_id, nameが必須プロパティです */

  createProfile(request: CreateProfileRequest, metadata?: Metadata): void;

  /** ユニークなフィールドを1つ受け取ってProfileを更新します */

  updateProfile(request: UpdateProfileRequest, metadata?: Metadata): void;

  /** ユニークなフィールドを1つ受け取ってProfileを削除します */

  deleteProfile(request: DeleteProfileRequest, metadata?: Metadata): void;

  /**
   * ユニークなフィールドを1つ受け取ってProfileにあるold_user_idをnew_user_idへ更新します
   * user_idを変更したいときに利用してください
   */

  updateUserIdOnProfile(request: UpdateUserIdOnProfileRequest, metadata?: Metadata): void;

  /** profile_idを1つ受け取ってprofile_iconを１つ返します */

  getProfileIcon(
    request: GetProfileIconRequest,
    metadata?: Metadata
  ): Promise<ProfileIcon> | Observable<ProfileIcon> | ProfileIcon;

  /** profile_idとPathを受け取ってprofile_iconを1つ作成します */

  createProfileIcon(request: CreateProfileIconRequest, metadata?: Metadata): void;

  /** profile_idとPathを受け取ってprofile_iconを1つ更新します */

  updateProfileIcon(request: UpdateProfileIconRequest, metadata?: Metadata): void;

  /** profile_idを受け取ってprofile_iconを1つ削除します */

  deleteProfileIcon(request: DeleteProfileIconRequest, metadata?: Metadata): void;

  /** user_idまたはgame_idを受け取ってFollowGameの配列を返します */

  listFollowGame(
    request: ListFollowGameRequest,
    metadata?: Metadata
  ): Promise<ListFollowGameResponse> | Observable<ListFollowGameResponse> | ListFollowGameResponse;

  /** user_idとgame_idを受け取ってあたらしいFollowGameを作成します */

  createFollowGame(request: CreateFollowGameRequest, metadata?: Metadata): void;

  /** user_idとgame_idから成る結合キーに一致するFollowGameを1つ削除します */

  deleteFollowGame(request: DeleteFollowGameRequest, metadata?: Metadata): void;

  batchListFollowGame(
    request: BatchListFollowGameRequest,
    metadata?: Metadata
  ):
    | Promise<BatchListFollowGameResponse>
    | Observable<BatchListFollowGameResponse>
    | BatchListFollowGameResponse;

  /** user_idまたはfollow_user_idを受け取ってFollowUserの配列を返します */

  listFollowUser(
    request: ListFollowUserRequest,
    metadata?: Metadata
  ): Promise<ListFollowUserResponse> | Observable<ListFollowUserResponse> | ListFollowUserResponse;

  /** user_idとfollow_user_idを受け取ってあたらしいFollowUserを作成します */

  createFollowUser(request: CreateFollowUserRequest, metadata?: Metadata): void;

  /** user_idとfollow_user_idから成る結合キーに一致するFollowUserを1つ削除します */

  deleteFollowUser(request: DeleteFollowUserRequest, metadata?: Metadata): void;

  /** user_idを受け取ってDogTag単体を返します */

  getDogTag(
    request: GetDogTagRequest,
    metadata?: Metadata
  ): Promise<DogTag> | Observable<DogTag> | DogTag;

  /** user_idの配列を受け取ってDogTagの配列を返します */

  listDogTag(
    request: ListDogTagRequest,
    metadata?: Metadata
  ): Promise<ListDogTagResponse> | Observable<ListDogTagResponse> | ListDogTagResponse;

  /** user_idを受け取ってMetadata単体を返します */

  getUserMetadata(
    request: GetUserMetadataRequest,
    metadata?: Metadata
  ): Promise<UserMetadata> | Observable<UserMetadata> | UserMetadata;

  /** user_idの配列を受け取ってMetadataの配列を返します */

  listUserMetadata(
    request: ListUserMetadataRequest,
    metadata?: Metadata
  ):
    | Promise<ListUserMetadataResponse>
    | Observable<ListUserMetadataResponse>
    | ListUserMetadataResponse;
}

export function ProfileApiControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getProfile',
      'createProfile',
      'updateProfile',
      'deleteProfile',
      'updateUserIdOnProfile',
      'getProfileIcon',
      'createProfileIcon',
      'updateProfileIcon',
      'deleteProfileIcon',
      'listFollowGame',
      'createFollowGame',
      'deleteFollowGame',
      'batchListFollowGame',
      'listFollowUser',
      'createFollowUser',
      'deleteFollowUser',
      'getDogTag',
      'listDogTag',
      'getUserMetadata',
      'listUserMetadata',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('ProfileApi', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('ProfileApi', method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PROFILE_API_SERVICE_NAME = 'ProfileApi';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
