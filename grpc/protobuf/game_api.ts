/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';
import { Game } from './telele/type/game';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'telele.api';

export interface GameIds {
  ids: number[];
}

export interface GameTitles {
  titles: string[];
}

export interface GetGameRequest {
  id: number;
}

export interface ListGameRequest {
  gameIds: GameIds | undefined;
  gameTitles: GameTitles | undefined;
}

export interface ListGameResponse {
  games: Game[];
}

export interface ListGamePaginationRequest {
  skip: number;
  first: number;
  after: string;
}

export interface ListGamePaginationResponse {
  games: Game[];
}

export const TELELE_API_PACKAGE_NAME = 'telele.api';

export interface GameApiClient {
  getGame(request: GetGameRequest, metadata?: Metadata): Observable<Game>;

  listGame(request: ListGameRequest, metadata?: Metadata): Observable<ListGameResponse>;

  listGamePagination(
    request: ListGamePaginationRequest,
    metadata?: Metadata
  ): Observable<ListGamePaginationResponse>;
}

export interface GameApiController {
  getGame(request: GetGameRequest, metadata?: Metadata): Promise<Game> | Observable<Game> | Game;

  listGame(
    request: ListGameRequest,
    metadata?: Metadata
  ): Promise<ListGameResponse> | Observable<ListGameResponse> | ListGameResponse;

  listGamePagination(
    request: ListGamePaginationRequest,
    metadata?: Metadata
  ):
    | Promise<ListGamePaginationResponse>
    | Observable<ListGamePaginationResponse>
    | ListGamePaginationResponse;
}

export function GameApiControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getGame', 'listGame', 'listGamePagination'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('GameApi', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('GameApi', method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const GAME_API_SERVICE_NAME = 'GameApi';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
