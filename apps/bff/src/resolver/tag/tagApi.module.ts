import { Module } from '@nestjs/common';
import { TagApiResolver } from './tagApi.resolver';
import { TagApiService } from './tagApi.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TagDataloader } from './tag.dataloader';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TAG_API_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5001',
          package: 'telele.api',
          protoPath: 'grpc/protos/tag_api.proto',
        },
      },
    ]),
  ],
  providers: [TagApiService, TagApiResolver, TagDataloader],
  exports: [TagApiService, TagDataloader],
})
export class TagApiModule {}
