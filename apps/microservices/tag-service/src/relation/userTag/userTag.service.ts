import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserTag, Prisma } from '@prisma/client_tag';

type UserTagKey = 'userId' | 'tagId';

@Injectable()
export class UserTagService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * `UserTag`に関するメソッド、
   * 用途に応じて引数の値を変更してください。
   * @param id `tagId`または`userId`
   * @param key 検索したいフィールドを記入
   * @returns 一致するUserTagの配列を返します
   */
  async userTags<T>(id: T, key: UserTagKey): Promise<UserTag[]> {
    return await this.prisma.userTag.findMany({
      where: { [key]: id },
    });
  }

  /**
   * `UserTag` を新しく作成します
   * @param data `userId` と `tagId` を受け取ります
   * @returns void
   */
  async createUserTag(data: Prisma.UserTagCreateInput): Promise<UserTag> {
    return this.prisma.userTag.create({ data });
  }

  /**
   * `UserTag` を削除します
   * @param where `userId` と `tagId` の結合キーを受け取ります
   * @returns void
   */
  async deleteUserTag(where: Prisma.UserTagWhereUniqueInput): Promise<UserTag> {
    return this.prisma.userTag.delete({ where });
  }
}
