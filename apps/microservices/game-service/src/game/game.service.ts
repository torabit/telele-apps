import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Game, Publisher, GameIcon, Prisma } from '@prisma/client_game';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  /**
   * `Game`に関するメソッド、
   * ユニークなフィールド(id)を受け取って`Game`単体(Publisherを連携して)を返す
   * @param gameWhereUniqueInput `id`
   * @returns `Game`を返します
   */
  async game(
    gameWhereUniqueInput: Prisma.GameWhereUniqueInput,
  ): Promise<
    (Game & { publisher: Publisher } & { gameIcon: GameIcon }) | null
  > {
    return this.prisma.game.findUnique({
      where: gameWhereUniqueInput,
      include: { publisher: true, gameIcon: true },
    });
  }

  /**
   * `Game`に関するメソッド、
   * `Game`の配列(Publisherを連携して)を返す
   * @param params
   * @property where - Postgresqlのwhereメソッド
   * @returns 検索に一致した`Game`の配列(Publisherを連携して)を返す
   */
  async games(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GameWhereUniqueInput;
    where?: Prisma.GameWhereInput;
    orderBy?: Prisma.GameOrderByWithRelationInput;
  }): Promise<(Game & { publisher: Publisher } & { gameIcon: GameIcon })[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.game.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { publisher: true, gameIcon: true },
    });
  }
}
