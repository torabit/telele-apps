import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TagService],
  exports: [TagService],
})
export class TagModule {}
