import { Module } from '@nestjs/common';
import { GameTagModule } from './gameTag/gameTag.module';
import { UserTagModule } from './userTag/userTag.module';
import { PartyTagModule } from './partyTag/partyTag.module';

@Module({
  imports: [GameTagModule, UserTagModule, PartyTagModule],
  exports: [GameTagModule, UserTagModule, PartyTagModule],
})
export class RelationModule {}
