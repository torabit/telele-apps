import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FollowGameService } from './followGame.service';

@Module({
  imports: [PrismaModule],
  providers: [FollowGameService],
  exports: [FollowGameService],
})
export class FollowGameModule {}
