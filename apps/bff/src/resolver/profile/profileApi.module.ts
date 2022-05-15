import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FollowGameDataloader } from './dataloader/followGame.dataloader';
import { ProfileApiService } from './profileApi.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROFILE_API_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5002',
          package: 'telele.api',
          protoPath: 'grpc/protos/profile_api.proto',
        },
      },
    ]),
  ],
  providers: [ProfileApiService, FollowGameDataloader],
  exports: [ProfileApiService, FollowGameDataloader],
})
export class ProfileApiModule {}
