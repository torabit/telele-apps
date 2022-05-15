import {
  Prisma,
  Profile as PrismaProfile,
  ProfileIcon as PrismaProfileIcon,
  FollowGame as PrismaFollowGame,
  FollowUser as PrismaFollowUser,
} from '@prisma/client_profile';

import {
  FollowGameIds,
  Profile as GrpcProfile,
  DogTag,
  UserMetadata,
} from 'grpc/protobuf/telele/type/profile';
import { ProfileIcon as GrpcProfileIcon } from 'grpc/protobuf/telele/type/profile_icon';
import { FollowGame as GrpcFollowGame } from 'grpc/protobuf/telele/type/follow_game';
import { FollowUser as GrpcFollowUser } from 'grpc/protobuf/telele/type/follow_user';

import { convertGoogleColor } from './color';
import {
  UpdateProfileRequest,
  CreateProfileRequest,
} from '../grpc/protobuf/profile_api';
import {
  convertGoogleTimestamp,
  convertGoogleDate,
  convertGoogleTimeOfDay,
  convertDateMessage,
  convertTime,
} from './datetime';

import {
  validationColor,
  validationDateMessage,
  validationTime,
} from 'validator/validationProfileProperty';

import { isString } from 'validator/lib/isString';
import { OptionalProfile } from 'src/dto';

/**
 *
 * @param profile Prismaで作成したProfile型のObjectを受け取ります
 * @returns gRPC型のProfileを返します
 */
export function adaptGrpcProfile(
  profile: PrismaProfile & { profileIcon: PrismaProfileIcon },
): GrpcProfile {
  let path: string | undefined;

  if (profile.profileIcon) path = profile.profileIcon.path;

  const adaptProfile: GrpcProfile = {
    ...profile,
    personalColor: convertGoogleColor(profile.personalColor),
    birthday: convertGoogleDate(profile.birthday),
    startTime: convertGoogleTimeOfDay(profile.startTime),
    endTime: convertGoogleTimeOfDay(profile.endTime),
    createdAt: convertGoogleTimestamp(profile.createdAt),
    updatedAt: convertGoogleTimestamp(profile.updatedAt),
    deletedAt: convertGoogleTimestamp(profile.deletedAt),
    profileIconPath: path,
  };

  return adaptProfile;
}

/**
 * Profileを新規作成する場合にgRPC型のPayloadをPrisma型に変換します
 * 値が無いプロパティは削除して新しいPayloadを作成します
 * @param profileRequest Profileを作成するための値を受け取ります
 * @returns Prisma型のProfileを返します
 */
export function adaptCreateProfileRequest(
  profileRequest: CreateProfileRequest,
): Prisma.ProfileCreateInput {
  const { genderId, biography, personalColor, birthday, startTime, endTime } =
    profileRequest;

  const adaptProfileRequest: Prisma.ProfileCreateInput = {
    ...profileRequest,
    // 値がない場合はNullに変換
    genderId: genderId ? genderId : null,
    // 値がない場合はNullに変換、 空文字が送られてきた場合はisStringで判定後そのまま保存
    biography: isString(biography) ? biography : null,
    // 値がない場合はNullに変換
    personalColor: personalColor ? validationColor(personalColor) : null,
    // 値がない場合はNullに変換
    // オブジェクトをPrisma用に変換
    birthday: birthday ? validationDateMessage(birthday) : null,
    startTime: startTime ? validationTime(startTime) : null,
    endTime: endTime ? validationTime(endTime) : null,
  };

  // Nullの値を持つプロパティを削除
  for (const key of Object.keys(adaptProfileRequest)) {
    if (adaptProfileRequest[key] === null) delete adaptProfileRequest[key];
  }

  return adaptProfileRequest;
}

type AdaptUpdateProfileRequest = Omit<
  Prisma.ProfileUpdateInput,
  'id' | 'userId'
>;
/**
 * Profileを更新する場合にgRPC型のPayloadをPrisma型に変換します
 * 値が無いプロパティは削除して新しいPayloadを作成します
 * @param profileRequest　Profileを更新するための値を受け取ります
 * @returns Prisma型のProfileを返します
 */
export function adaptUpdateProfileRequest(
  profileRequest: UpdateProfileRequest,
): AdaptUpdateProfileRequest {
  const {
    name,
    genderId,
    biography,
    personalColor,
    birthday,
    startTime,
    endTime,
  } = profileRequest;

  const adaptProfileRequest: AdaptUpdateProfileRequest = {
    // 値がない場合はNullに変換
    name: name ? name : null,
    genderId: genderId ? genderId : null,
    // 値がない場合はNullに変換、 空文字が送られてきた場合はisStringで判定後そのまま保存
    biography: isString(biography) ? biography : null,
    // 値がない場合はNullに変換
    // オブジェクトをPrisma用に変換
    personalColor: personalColor ? validationColor(personalColor) : null,
    birthday: birthday ? convertDateMessage(birthday) : null,
    startTime: startTime ? convertTime(startTime) : null,
    endTime: endTime ? convertTime(endTime) : null,
  };

  // Nullの値を持つプロパティを削除
  for (const key of Object.keys(adaptProfileRequest)) {
    if (adaptProfileRequest[key] === null) delete adaptProfileRequest[key];
  }

  return adaptProfileRequest;
}

/**
 *
 * @param profileIcon Prismaで作成した `ProfileIcon` 型のObjectを受け取ります
 * @returns gRPC型の `ProfileIcon` を返します
 */
export function adaptGrpcProfileIcon(
  profileIcon: PrismaProfileIcon,
): GrpcProfileIcon {
  const adaptProfileIcon: GrpcProfileIcon = {
    ...profileIcon,
    createdAt: convertGoogleTimestamp(profileIcon.createdAt),
    updatedAt: convertGoogleTimestamp(profileIcon.updatedAt),
    deletedAt: convertGoogleTimestamp(profileIcon.deletedAt),
  };

  return adaptProfileIcon;
}

/**
 *
 * @param followGame Prismaで作成した `FollowGame` 型のObjectを受け取ります
 * @returns gRPC型の `FollowGame` を返します
 */
export function adaptGrpcFollowGame(
  followGame: PrismaFollowGame,
): GrpcFollowGame {
  const adaptFollowGame: GrpcFollowGame = {
    ...followGame,
    createdAt: convertGoogleTimestamp(followGame.createdAt),
    updatedAt: convertGoogleTimestamp(followGame.updatedAt),
    deletedAt: convertGoogleTimestamp(followGame.deletedAt),
  };

  return adaptFollowGame;
}

/**
 *
 * @param followUser Prismaで作成した `FollowUser` 型のObjectを受け取ります
 * @returns gRPC型の `FollowUser` を返します
 */
export function adaptGrpcFollowUser(
  followUser: PrismaFollowUser,
): GrpcFollowUser {
  const adaptFollowUser: GrpcFollowUser = {
    ...followUser,
    createdAt: convertGoogleTimestamp(followUser.createdAt),
    updatedAt: convertGoogleTimestamp(followUser.updatedAt),
    deletedAt: convertGoogleTimestamp(followUser.deletedAt),
  };
  return adaptFollowUser;
}

export function adaptGrpcDogTag(profile: OptionalProfile): DogTag {
  let adaptFollowGames: FollowGameIds | null = null;
  let path: string | null = null;

  if (profile.followGames) {
    adaptFollowGames = {
      ids: profile.followGames.map((followGame) =>
        Object.create({ userId: followGame.userId, gameId: followGame.gameId }),
      ),
    };
  }
  if (profile.profileIcon) path = profile.profileIcon.path;

  const adaptDogTag: DogTag = {
    userId: profile.userId,
    name: profile.name,
    biography: profile.biography,
    followGames: adaptFollowGames,
    profileIconPath: path,
  };

  return adaptDogTag;
}

export function adaptGrpcUserMetadata(profile: OptionalProfile): UserMetadata {
  let path: string | null = null;

  if (profile.profileIcon) path = profile.profileIcon.path;

  const adaptUserMetadata: UserMetadata = {
    userId: profile.userId,
    name: profile.name,
    profileIconPath: path,
  };

  return adaptUserMetadata;
}
