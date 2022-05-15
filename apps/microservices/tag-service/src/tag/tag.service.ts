import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Tag, TagCategory, Prisma } from '@prisma/client_tag';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * `Tag`に関するメソッド、
   * ユニークなフィールドを受け取って`Tag`単体を返します
   * @param tagWhereUniqueInput `id`または`name`
   * @returns `Tag`を返します
   */
  async tag(
    tagWhereUniqueInput: Prisma.TagWhereUniqueInput,
  ): Promise<(Tag & { tagCategory: TagCategory }) | null> {
    return await this.prisma.tag.findUnique({
      where: tagWhereUniqueInput,
      include: { tagCategory: true },
    });
  }

  /**
   * `Tag`に関するメソッド、
   * `Tag`の配列を返します
   * @param params
   * @property where - Postgresqlのwhereメソッド
   * @returns `Tag`の配列を返します
   */
  async tags(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TagWhereUniqueInput;
    where?: Prisma.TagWhereInput;
    orderBy?: Prisma.TagOrderByWithRelationInput;
  }): Promise<(Tag & { tagCategory: TagCategory })[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return await this.prisma.tag.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { tagCategory: true },
    });
  }
}
