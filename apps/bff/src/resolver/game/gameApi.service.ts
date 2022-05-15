import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  ListGameRequest,
  GameApiController,
  GetGameRequest,
  ListGamePaginationRequest,
  ListGamePaginationResponse,
} from 'grpc/protobuf/game_api';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class GameApiService implements OnModuleInit {
  private gameApiService: GameApiController;
  constructor(@Inject('GAME_API_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.gameApiService = this.client.getService<GameApiController>('GameApi');
  }

  async getGame(request: GetGameRequest) {
    const fetchedGame = this.gameApiService.getGame(request);
    if (!fetchedGame) return null;
    return fetchedGame;
  }

  async listGame(request: ListGameRequest) {
    const fetchedGames = await this.gameApiService.listGame(request);
    if (!fetchedGames) return null;

    return fetchedGames;
  }

  async listGamePagination(request: ListGamePaginationRequest) {
    const fetchedGames = await this.gameApiService.listGamePagination(request);
    if (!fetchedGames) return null;

    return lastValueFrom(
      fetchedGames as Observable<ListGamePaginationResponse>,
    );
  }
}
