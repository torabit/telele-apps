import { convertGoogleTimestamp } from './convertGoogleTimestamp';
import { Tag as GrpcTag } from 'grpc/protobuf/telele/type/tag';
import { TagCategory as GrpcTagCategory } from 'grpc/protobuf/telele/type/tag_category';
import { GameTag as GrpcGameTag } from 'grpc/protobuf/telele/type/game_tag';
import { UserTag as GrpcUserTag } from 'grpc/protobuf/telele/type/user_tag';
import { PartyTag as GrpcPartyTag } from 'grpc/protobuf/telele/type/party_tag';
import {
  Tag as PrismaTag,
  TagCategory as PrismaTagCategory,
  GameTag as PrismaGameTag,
  UserTag as PrismaUserTag,
  PartyTag as PrismaPartyTag,
} from '@prisma/client_tag';

export interface DateList {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

/**
 *
 * @param obj DateListをコンパイルしたいObject
 * @param dateObj DateList型のObject
 * @returns `obj` とGoogleTimestamp化した `dateObj` をmergeして返します
 */
export function adaptGrpcDateObj<T>(obj: T, dateObj: DateList) {
  const adaptObj = {
    ...obj,
    createdAt: convertGoogleTimestamp(dateObj.createdAt),
    updatedAt: convertGoogleTimestamp(dateObj.updatedAt),
    deletedAt: convertGoogleTimestamp(dateObj.deletedAt),
  };
  return adaptObj;
}

/**
 *
 * @param tag Prismaで作成したTag型
 * @returns `createdAt` `updatedAt` `deletedAt` をGoogleTimestamp化して返します
 */
export function adaptGrpcTag(
  tag: PrismaTag & { tagCategory: PrismaTagCategory },
): GrpcTag {
  const adaptTag: GrpcTag = {
    ...tag,
    createdAt: convertGoogleTimestamp(tag.createdAt),
    updatedAt: convertGoogleTimestamp(tag.updatedAt),
    deletedAt: convertGoogleTimestamp(tag.deletedAt),
    tagCategoryName: tag.tagCategory.name,
  };

  return adaptTag;
}

/**
 *
 * @param tagCategory Prismaで作成したTagCategory型
 * @returns `createdAt` `updatedAt` `deletedAt` をGoogleTimestamp化して返します
 */
export function adaptGrpcTagCategory(
  tagCategory: PrismaTagCategory,
): GrpcTagCategory {
  const adaptTagCategory = {
    ...tagCategory,
    createdAt: convertGoogleTimestamp(tagCategory.createdAt),
    updatedAt: convertGoogleTimestamp(tagCategory.updatedAt),
    deletedAt: convertGoogleTimestamp(tagCategory.deletedAt),
  };

  return adaptTagCategory;
}

export function adaptGrpcGameTag(gameTag: PrismaGameTag): GrpcGameTag {
  const adaptGameTag = {
    ...gameTag,
    createdAt: convertGoogleTimestamp(gameTag.createdAt),
    updatedAt: convertGoogleTimestamp(gameTag.updatedAt),
    deletedAt: convertGoogleTimestamp(gameTag.deletedAt),
  };

  return adaptGameTag;
}

export function adaptGrpcUserTag(userTag: PrismaUserTag): GrpcUserTag {
  const adaptUserTag = {
    ...userTag,
    createdAt: convertGoogleTimestamp(userTag.createdAt),
    updatedAt: convertGoogleTimestamp(userTag.updatedAt),
    deletedAt: convertGoogleTimestamp(userTag.deletedAt),
  };

  return adaptUserTag;
}

export function adaptGrpcPartyTag(partyTag: PrismaPartyTag): GrpcPartyTag {
  const adaptPartyTag = {
    ...partyTag,
    createdAt: convertGoogleTimestamp(partyTag.createdAt),
    updatedAt: convertGoogleTimestamp(partyTag.updatedAt),
    deletedAt: convertGoogleTimestamp(partyTag.deletedAt),
  };

  return adaptPartyTag;
}
