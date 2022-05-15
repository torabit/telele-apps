import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProfileIconService } from './profileIcon.service';

@Module({
  imports: [PrismaModule],
  providers: [ProfileIconService],
  exports: [ProfileIconService],
})
export class ProfileIconModule {}
