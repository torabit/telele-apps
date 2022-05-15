import { Query, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { GameApiService } from './gameApi.service';
import { Game } from 'src/graphql.entity';
import { UseInterceptors } from '@nestjs/common';
import { TagsInterceptor } from 'src/interceptor/tags.interceptor';
import {
  ListGamePaginationInterceptor,
  ListGamePaginationResponse,
} from 'src/interceptor/listGamePagination.interceptor';
import { TagDataloader } from '../tag/tag.dataloader';
import { GamesInterceptor } from 'src/interceptor/games.interceptor';
import { FollowGameDataloader } from '../profile/dataloader/followGame.dataloader';
import { Game as GrpcGame } from 'grpc/protobuf/telele/type/game';

@Resolver('Game')
export class GameApiResolver {
  constructor(
    private readonly gameApiService: GameApiService,
    private readonly tagDataLoader: TagDataloader,
    private readonly followGameDataLoader: FollowGameDataloader,
  ) {}

  @Query('getGame')
  getGame(@Args('gameId', Int) id: number) {
    const fetchedGame = this.gameApiService.getGame({ id });
    return fetchedGame;
  }

  @Query('listGame')
  @UseInterceptors(GamesInterceptor)
  async listGame(
    @Args('gameIds') gameIds: number[],
    @Args('gameTitles') gameTitles: string[],
  ) {
    const ids = gameIds ? { ids: gameIds } : null;
    const titles = gameTitles ? { titles: gameTitles } : null;

    const fetchedGames = await this.gameApiService.listGame({
      gameIds: ids,
      gameTitles: titles,
    });
    return fetchedGames;
  }

  @Query('listGamePagination')
  @UseInterceptors(ListGamePaginationInterceptor)
  async listGamePagination(
    @Args('first') _first: number,
    @Args('after') _after: string,
  ) {
    // hasNextPageの判定のために1つ多くFetchする
    const first = _first + 1 || 11;
    const after = _after;
    const skip = after ? 1 : 0;

    const fetchedGames = await this.gameApiService.listGamePagination({
      skip,
      first,
      after,
    });

    const hasNextPage = fetchedGames.games.length > _first;

    let games: GrpcGame[];

    if (hasNextPage) {
      games = fetchedGames.games.slice(0, -1);
    } else {
      games = fetchedGames.games;
    }

    const lastGame = games[games.length - 1];

    const response: ListGamePaginationResponse = {
      edges: games.map((game) => ({
        cursor: game.id,
        node: game,
      })),
      pageInfo: {
        endCursor: lastGame.id,
        hasNextPage,
      },
    };

    return response;
  }

  @ResolveField()
  @UseInterceptors(TagsInterceptor)
  async tags(@Parent() game: Game & { id: number }) {
    if (!game.id) {
      return null;
    }
    try {
      return await this.tagDataLoader.load(game.id);
    } catch {
      return null;
    }
  }

  @ResolveField()
  async followersQuantity(@Parent() game: Game & { id: number }) {
    if (!game.id) {
      return null;
    }
    try {
      const fetchedFollowGame = await this.followGameDataLoader.load(game.id);
      let followersQuantity = 0;

      if (fetchedFollowGame.followGames) {
        followersQuantity = fetchedFollowGame.followGames.length;
      }

      return followersQuantity;
    } catch {
      return null;
    }
  }
}
