import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FollowUserService } from './followUser.service';

@Module({
  imports: [PrismaModule],
  providers: [FollowUserService],
  exports: [FollowUserService],
})
export class FollowUserModule {}
