import { Module } from '@nestjs/common';
import { TagModule } from 'src/tag/tag.module';
import { TagCategoryModule } from 'src/tagCategory/tagCategory.module';
import { RelationModule } from 'src/relation/relation.module';
import { TagApiController } from './tagApi.controller';

@Module({
  imports: [TagModule, TagCategoryModule, RelationModule],
  controllers: [TagApiController],
})
export class TagApiModule {}
