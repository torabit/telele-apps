import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { convertToDate } from 'src/util/convertTimestamp';
import { ListTagResponse } from 'grpc/protobuf/tag_api';
import { Tag } from 'grpc/protobuf/telele/type/tag';

@Injectable()
export class TagsInterceptor implements NestInterceptor<ListTagResponse> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<ListTagResponse>,
  ): Observable<Partial<Tag>[]> {
    return next.handle().pipe(
      map((data) =>
        data.tags.map((tag) =>
          Object.create({
            ...tag,
            id: tag.id.toString(),
            tagCategoryId: tag.tagCategoryId.toString(),
            createdAt: convertToDate(tag.createdAt),
            updatedAt: convertToDate(tag.updatedAt),
            deletedAt: convertToDate(tag.deletedAt),
          }),
        ),
      ),
    );
  }
}
