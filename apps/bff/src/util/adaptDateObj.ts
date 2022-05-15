import { Game as GrpcGame } from 'grpc/protobuf/telele/type/game';
import { Game as GrqlGame } from 'src/graphql.entity';
import { convertToDate } from './convertTimestamp';

export function adaptGrqlGame(game: GrpcGame): GrqlGame {
  const adaptGame: GrqlGame = {
    ...game,
    id: game.id.toString(),
    publisherId: game.publisherId.toString(),
    createdAt: convertToDate(game.createdAt),
    updatedAt: convertToDate(game.updatedAt),
    deletedAt: convertToDate(game.deletedAt),
  };

  return adaptGame;
}
