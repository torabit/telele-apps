import { Module } from '@nestjs/common';
import { TagApiModule } from './tagApi/tagApi.module';

@Module({
  imports: [TagApiModule],
})
export class AppModule {}
