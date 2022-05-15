import { Module } from '@nestjs/common';
import { GameModule } from '../game/game.module';
import { PublisherModule } from '../publisher/publisher.module';
import { GameApiController } from './gameApi.controller';

@Module({
  imports: [GameModule, PublisherModule],
  controllers: [GameApiController],
})
export class GameApiModule {}
