import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import {
  GetTagRequest,
  TagApiController,
  ListTagRequest,
  BatchListTagByGameIdResponse,
} from 'grpc/protobuf/tag_api';

@Injectable()
export class TagApiService implements OnModuleInit {
  private tagApiService: TagApiController;
  constructor(@Inject('TAG_API_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.tagApiService = this.client.getService<TagApiController>('TagApi');
  }

  async getTag(request: GetTagRequest) {
    const fetchedTag = await this.tagApiService.getTag(request);
    if (!fetchedTag) {
      return null;
    }
    return fetchedTag;
  }

  async listTag(request: ListTagRequest) {
    const fetchedTags = this.tagApiService.listTag(request);
    if (!fetchedTags) {
      return null;
    }
    return fetchedTags;
  }

  async batchListTagByGameId(gameIds: number[]) {
    const fetchedTags = await this.tagApiService.batchListTagByGameId({
      gameIds,
    });

    return lastValueFrom(
      fetchedTags as Observable<BatchListTagByGameIdResponse>,
    );
  }
}
