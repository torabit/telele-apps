import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProfileApiModule } from '../profile/profileApi.module';
import { TagApiModule } from '../tag/tagApi.module';
import { GameApiResolver } from './gameApi.resolver';
import { GameApiService } from './gameApi.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GAME_API_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'telele.api',
          protoPath: 'grpc/protos/game_api.proto',
        },
      },
    ]),
    TagApiModule,
    ProfileApiModule,
  ],
  providers: [GameApiService, GameApiResolver],
  exports: [GameApiService],
})
export class GameApiModule {}
