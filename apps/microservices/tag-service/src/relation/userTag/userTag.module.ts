import { Module } from '@nestjs/common';
import { UserTagService } from './userTag.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserTagService],
  exports: [UserTagService],
})
export class UserTagModule {}
