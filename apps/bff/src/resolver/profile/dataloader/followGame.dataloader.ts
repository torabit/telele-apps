import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { ProfileApiService } from '../profileApi.service';
import { FollowGames } from 'grpc/protobuf/profile_api';

@Injectable({ scope: Scope.REQUEST })
export class FollowGameDataloader extends DataLoader<number, FollowGames> {
  constructor(private readonly profileApiService: ProfileApiService) {
    super(async (keys: number[]) => {
      return (
        await this.profileApiService.batchListFollowGame({
          gameIds: { ids: keys },
          userIds: null,
        })
      ).listFollowGames;
    });
  }
}
