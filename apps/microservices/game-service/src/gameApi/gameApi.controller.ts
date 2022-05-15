import { Controller } from '@nestjs/common';
import { GameService } from '../game/game.service';
import { adaptGrpcGame } from '../../util/adaptDateObj';
import {
  Game as PrismaGame,
  GameIcon as PrismaGameIcon,
  Publisher as PrismaPublisher,
} from '@prisma/client_game';
import {
  GameApiControllerMethods,
  GameApiController as GrpcGameApiController,
  GetGameRequest,
  ListGameRequest,
  ListGameResponse,
  ListGamePaginationRequest,
  ListGamePaginationResponse,
} from 'grpc/protobuf/game_api';
import { Game } from 'grpc/protobuf/telele/type/game';
import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

@GameApiControllerMethods()
@Controller('game')
export class GameApiController implements GrpcGameApiController {
  constructor(private readonly gameService: GameService) {}

  async getGame(request: GetGameRequest): Promise<Game> {
    let fetchedGame: PrismaGame & {
      publisher: PrismaPublisher;
    } & {
      gameIcon: PrismaGameIcon;
    };

    fetchedGame = await this.gameService.game({
      id: request.id,
    });

    // grpc通信のためにDateをGoogleTimestampに変換
    const game = {
      ...adaptGrpcGame(fetchedGame),
    };

    return game;
  }

  async listGame(request: ListGameRequest): Promise<ListGameResponse> {
    type ListGamesKey = keyof ListGameRequest;

    let key: ListGamesKey;
    let fetchedGames: (PrismaGame & {
      publisher: PrismaPublisher;
    } & {
      gameIcon: PrismaGameIcon;
    })[];

    const { gameIds, gameTitles } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (gameIds) key = 'gameIds';
    else if (gameTitles) key = 'gameTitles';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'gameIds':
        fetchedGames = await this.gameService.games({
          where: { id: { in: gameIds.ids } },
        });
        break;

      case 'gameTitles':
        fetchedGames = await this.gameService.games({
          where: { title: { in: gameTitles.titles } },
        });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not listTags request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const games = {
      games: fetchedGames.map((fetchedGame) => adaptGrpcGame(fetchedGame)),
    };

    return games;
  }

  async listGamePagination(
    request: ListGamePaginationRequest,
    metadata?: Metadata,
  ): Promise<ListGamePaginationResponse> {
    const { skip, first, after } = request;
    const take = first || 10;
    const cursor = { id: parseInt(after) || 1 };

    const fetchedGames = await this.gameService.games({
      skip,
      take,
      cursor,
    });

    // grpc通信のためにDateをGoogleTimestampに変換
    const games = {
      games: fetchedGames.map((fetchedGame) => adaptGrpcGame(fetchedGame)),
    };

    return games;
  }
}
