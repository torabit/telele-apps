import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:5000',
    package: 'telele.api',
    protoPath: join(process.cwd(), 'grpc/protos/game_api.proto'),
  },
};
