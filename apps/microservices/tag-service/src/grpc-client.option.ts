import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:5001',
    package: 'telele.api',
    protoPath: join(process.cwd(), 'grpc/protos/tag_api.proto'),
  },
};
