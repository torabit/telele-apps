import { convertGoogleTimestamp } from './convertGoogleTimestamp';
import { Game as GrpcGame } from 'grpc/protobuf/telele/type/game';
import { Publisher as GrpcPublisher } from 'grpc/protobuf/telele/type/publisher';
import {
  Game as PrismaGame,
  Publisher as PrismaPublisher,
  GameIcon as PrismaGameIcon,
} from '@prisma/client_game';

export interface DateList {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

/**
 *
 * @param obj DateListをコンパイルしたいObject
 * @param dateObj DateList型のObject
 * @returns `obj` とGoogleTimestamp化した `dateObj` をmergeして返す
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
 * @param game Prismaで作成したGame型
 * @returns `releaseDate`,`createdAt`,`updatedAt`,`deletedAt`をGoogleTimestamp化して返す
 */
export function adaptGrpcGame(
  game: PrismaGame & { publisher: PrismaPublisher } & {
    gameIcon: PrismaGameIcon;
  },
): GrpcGame {
  let gameIconPath: string | undefined;
  let publisherName: string | undefined;
  if (game.publisher) publisherName = game.publisher.name;
  if (game.gameIcon) gameIconPath = game.gameIcon.path;
  const adaptGame: GrpcGame = {
    ...game,
    releaseDate: convertGoogleTimestamp(game.releaseDate),
    createdAt: convertGoogleTimestamp(game.createdAt),
    updatedAt: convertGoogleTimestamp(game.updatedAt),
    deletedAt: convertGoogleTimestamp(game.deletedAt),
    gameIconPath,
    publisherName,
  };

  return adaptGame;
}

/**
 *
 * @param publisher Prismaで作成したPublisher型
 * @returns `createdAt`,`updatedAt`,`deletedAt`をGoogleTimestamp化して返す
 */
export function adaptGrpcPublisher(publisher: PrismaPublisher): GrpcPublisher {
  const adaptPublisher = {
    ...publisher,
    createdAt: convertGoogleTimestamp(publisher.createdAt),
    updatedAt: convertGoogleTimestamp(publisher.updatedAt),
    deletedAt: convertGoogleTimestamp(publisher.deletedAt),
  };

  return adaptPublisher;
}
