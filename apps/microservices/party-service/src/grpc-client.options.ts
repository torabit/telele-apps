import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:5003',
    package: 'telele.api',
    protoPath: join(process.cwd(), 'grpc/protos/party_api.proto'),
  },
};
