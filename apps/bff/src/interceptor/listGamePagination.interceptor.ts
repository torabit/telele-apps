import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Game as GrpcGame } from 'grpc/protobuf/telele/type/game';
import { ListGamePaginationResponse as GrqlListGamePaginationResponse } from '../graphql.entity';
import { adaptGrqlGame } from 'src/util/adaptDateObj';

interface Edges {
  cursor: number;
  node: GrpcGame;
}

interface PageInfo {
  endCursor: number;
  hasNextPage: boolean;
}

export interface ListGamePaginationResponse {
  edges: Edges[];
  pageInfo: PageInfo;
}

@Injectable()
export class ListGamePaginationInterceptor
  implements NestInterceptor<ListGamePaginationResponse>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<ListGamePaginationResponse>,
  ): Observable<GrqlListGamePaginationResponse> {
    const response: Observable<GrqlListGamePaginationResponse> = next
      .handle()
      .pipe(
        map((data) => ({
          edges: data.edges.map((edge) => ({
            cursor: edge.cursor.toString(),
            node: adaptGrqlGame(edge.node),
          })),
          pageInfo: {
            endCursor: data.pageInfo.endCursor.toString(),
            hasNextPage: data.pageInfo.hasNextPage,
          },
        })),
      );

    return response;
  }
}
