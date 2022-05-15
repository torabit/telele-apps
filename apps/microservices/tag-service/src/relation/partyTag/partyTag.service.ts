import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartyTag, Prisma } from '@prisma/client_tag';

type PartyTagKey = 'partyId' | 'tagId';

@Injectable()
export class PartyTagService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * `PartyTag` に関するメソッド、
   * 用途に応じて引数の値を変更してください。
   * @param id `tagId`または`partyId`
   * @param key 検索したいフィールドを記入
   * @returns 一致するPartyTagの配列を返します
   */
  async partyTags<T>(id: T, key: PartyTagKey): Promise<PartyTag[]> {
    return await this.prisma.partyTag.findMany({
      where: { [key]: id },
    });
  }

  /**
   * `PartyTag` を新しく作成します
   * @param data `partyId` と `tagId` を受け取ります
   * @returns void
   */
  async createPartyTag(data: Prisma.PartyTagCreateInput): Promise<PartyTag> {
    return this.prisma.partyTag.create({ data });
  }

  /**
   * `PartyTag` を削除します
   * @param where `partyId` と `tagId` の結合キーを受け取ります
   * @returns void
   */
  async deletePartyTag(
    where: Prisma.PartyTagWhereUniqueInput,
  ): Promise<PartyTag> {
    return this.prisma.partyTag.delete({ where });
  }
}
