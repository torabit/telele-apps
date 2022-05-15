import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PublisherService],
  exports: [PublisherService],
})
export class PublisherModule {}
