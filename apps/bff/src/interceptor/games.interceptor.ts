import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { convertToDate } from 'src/util/convertTimestamp';
import { ListGameResponse } from 'grpc/protobuf/game_api';
import { Game } from 'src/graphql.entity';

@Injectable()
export class GamesInterceptor implements NestInterceptor<ListGameResponse> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<ListGameResponse>,
  ): Observable<Partial<Game>[]> {
    return next.handle().pipe(
      map((data) =>
        data.games.map((game) =>
          Object.create({
            ...game,
            id: game.id.toString(),
            publisherId: game.publisherId.toString(),
            createdAt: convertToDate(game.createdAt),
            updatedAt: convertToDate(game.updatedAt),
            deletedAt: convertToDate(game.deletedAt),
          }),
        ),
      ),
    );
  }
}
