import { Module } from '@nestjs/common';
import { ProfileApiController } from './profileApi.controller';
import { ProfileModule } from 'src/profile/profile.module';
import { ProfileIconModule } from 'src/profileIcon/profileIcon.module';
import { RelationModule } from 'src/relation/relation.module';
@Module({
  imports: [ProfileModule, ProfileIconModule, RelationModule],
  controllers: [ProfileApiController],
})
export class ProfileApiModule {}
