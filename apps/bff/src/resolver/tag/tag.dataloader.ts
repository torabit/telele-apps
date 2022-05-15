import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { TagApiService } from './tagApi.service';
import { Tags } from 'grpc/protobuf/tag_api';

@Injectable({ scope: Scope.REQUEST })
export class TagDataloader extends DataLoader<number, Tags> {
  constructor(private readonly tagApiService: TagApiService) {
    super(async (keys: number[]) => {
      return (await this.tagApiService.batchListTagByGameId(keys)).listTags;
    });
  }
}
