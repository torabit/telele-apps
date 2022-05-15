import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GameService],
  exports: [GameService],
})
export class GameModule {}
