import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tag, TagCategory, Prisma } from '@prisma/client_tag';

@Injectable()
export class TagCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ユニークなフィールドを受け取って`TagCategory`単体を返します
   * @param tagCategoryUniqueInput `id` または `name`
   * @param checkIncludeTags `true`にすると`TagCategory`に関連する`Tag`の配列を含めます
   * @returns `TagCategory`を返します
   */
  async tagCategory(
    tagCategoryUniqueInput: Prisma.TagCategoryWhereUniqueInput,
    checkIncludeTags: boolean,
  ): Promise<(TagCategory & { tags: Tag[] }) | null> {
    return await this.prisma.tagCategory.findUnique({
      where: tagCategoryUniqueInput,
      include: { tags: checkIncludeTags },
    });
  }

  /**
   * `TagCategory`の配列を返します
   * @param params
   * @property where - Postgresqlのwhereメソッド
   * @returns `TagCategory`の配列を返します
   */
  async tagCategories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TagWhereUniqueInput;
    where?: Prisma.TagWhereInput;
    orderBy?: Prisma.TagOrderByWithRelationInput;
  }): Promise<TagCategory[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.tagCategory.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
