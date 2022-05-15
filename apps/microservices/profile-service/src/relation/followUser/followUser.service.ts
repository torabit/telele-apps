import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, FollowUser } from '@prisma/client_profile';

@Injectable()
export class FollowUserService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ユニークなフィールドを受け取って `FollowUser` の配列を返します
   * @param params
   * @returns `FollowUser[]`
   */
  async followUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FollowUserWhereUniqueInput;
    where?: Prisma.FollowUserWhereInput;
    orderBy?: Prisma.FollowUserOrderByWithRelationInput;
  }): Promise<FollowUser[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.followUser.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * 新しい `FollowUser` を作成します
   * @param data `user_id`　と `follow_user_id` を受け取ります
   * @returns 作成した `FollowUser`
   */
  async createFollowUser(
    data: Prisma.FollowUserCreateInput,
  ): Promise<FollowUser> {
    return this.prisma.followUser.create({ data });
  }

  /**
   * 結合キーを受けとって一致する `FollowUser` を削除します
   * @param followUserWhereUniqueInput `user_id`　と `follow_user_id` のObject
   * @returns 削除した`FollowUser`
   */
  async deleteFollowUser(
    followUserWhereUniqueInput: Prisma.FollowUserWhereUniqueInput,
  ) {
    return this.prisma.followUser.delete({ where: followUserWhereUniqueInput });
  }
}
