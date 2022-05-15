import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, FollowGame } from '@prisma/client_profile';
@Injectable()
export class FollowGameService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ユニークなフィールドを受け取って `FollowGame` の配列を返します
   * @param params
   * @returns `FollowGame[]`
   */
  async followGames(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FollowGameWhereUniqueInput;
    where?: Prisma.FollowGameWhereInput;
    orderBy?: Prisma.FollowGameOrderByWithRelationInput;
  }): Promise<FollowGame[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.followGame.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * 新しい `FollowGame` を作成します
   * @param data `game_id`　と `user_id` を受け取ります
   * @returns 作成した `FollowGame`
   */
  async createFollowGame(
    data: Prisma.FollowGameCreateInput,
  ): Promise<FollowGame> {
    return this.prisma.followGame.create({ data });
  }

  /**
   * 結合キーを受けとって一致する `FollowGame` を削除します
   * @param followGameWhereUniqueInput `game_id`　と `user_id` のObject
   * @returns 削除した`FollowGame`
   */
  async deleteFollowGame(
    followGameWhereUniqueInput: Prisma.FollowGameWhereUniqueInput,
  ) {
    return this.prisma.followGame.delete({ where: followGameWhereUniqueInput });
  }
}
