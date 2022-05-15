import { Module } from '@nestjs/common';
import { GameTagService } from './gameTag.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GameTagService],
  exports: [GameTagService],
})
export class GameTagModule {}
