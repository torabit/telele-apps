import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import {
  ProfileApiController,
  BatchListFollowGameRequest,
  BatchListFollowGameResponse,
} from 'grpc/protobuf/profile_api';

@Injectable()
export class ProfileApiService implements OnModuleInit {
  private profileApiService: ProfileApiController;
  constructor(@Inject('PROFILE_API_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.profileApiService =
      this.client.getService<ProfileApiController>('ProfileApi');
  }

  async batchListFollowGame(request: BatchListFollowGameRequest) {
    const fetchedFollowGames =
      this.profileApiService.batchListFollowGame(request);

    return lastValueFrom(
      fetchedFollowGames as Observable<BatchListFollowGameResponse>,
    );
  }
}
