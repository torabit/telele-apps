import { Module } from '@nestjs/common';
import { ProfileApiModule } from './profileApi/profileApi.module';

@Module({
  imports: [ProfileApiModule],
})
export class AppModule {}
