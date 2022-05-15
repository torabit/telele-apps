import { Module } from '@nestjs/common';
import { PartyTagService } from './partyTag.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PartyTagService],
  exports: [PartyTagService],
})
export class PartyTagModule {}
