import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameTag, Prisma } from '@prisma/client_tag';

@Injectable()
export class GameTagService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * `GameTag`に関するメソッド、
   * 用途に応じて引数の値を変更してください。
   * @param id `tagId`または`gameId`
   * @param key 検索したいフィールドを記入
   * @returns 一致するGameTagの配列を返します
   */
  async gameTags(where: Prisma.GameTagWhereInput): Promise<GameTag[]> {
    return await this.prisma.gameTag.findMany({
      where,
    });
  }
}
