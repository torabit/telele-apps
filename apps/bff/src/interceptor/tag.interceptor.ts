import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { convertToDate } from 'src/util/convertTimestamp';
import { Tag } from 'grpc/protobuf/telele/type/tag';

@Injectable()
export class TagInterceptor implements NestInterceptor<Tag> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<Tag>,
  ): Observable<Partial<Tag>> {
    return next.handle().pipe(
      map((tag) =>
        Object.create({
          ...tag,
          id: tag.id.toString(),
          tagCategoryId: tag.tagCategoryId.toString(),
          createdAt: convertToDate(tag.createdAt),
          updatedAt: convertToDate(tag.updatedAt),
          deletedAt: convertToDate(tag.deletedAt),
        }),
      ),
    );
  }
}
