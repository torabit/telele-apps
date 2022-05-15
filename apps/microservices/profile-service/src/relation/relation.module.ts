import { Module } from '@nestjs/common';
import { FollowGameModule } from './followGame/followGame.module';
import { FollowUserModule } from './followUser/followUser.module';
@Module({
  imports: [FollowGameModule, FollowUserModule],
  exports: [FollowGameModule, FollowUserModule],
})
export class RelationModule {}
