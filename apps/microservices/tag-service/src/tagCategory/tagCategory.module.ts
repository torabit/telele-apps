import { Module } from '@nestjs/common';
import { TagCategoryService } from './tagCategory.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TagCategoryService],
  exports: [TagCategoryService],
})
export class TagCategoryModule {}
