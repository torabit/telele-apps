import { Module } from '@nestjs/common';
import { GameApiModule } from './gameApi/gameApi.module';

@Module({
  imports: [GameApiModule],
})
export class AppModule {}
