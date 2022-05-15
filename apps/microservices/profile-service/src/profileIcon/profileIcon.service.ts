import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, ProfileIcon } from '@prisma/client_profile';

@Injectable()
export class ProfileIconService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * `ProfileIcon` に関するメソッド、
   * prfileIdを受け取って `ProfileIcon` 単体を返します
   * @param profileId `profileId` を受け取ります
   * @returns `ProfileIcon`
   */
  async profileIcon(profileId: string): Promise<ProfileIcon> {
    return await this.prisma.profileIcon.findUnique({
      where: { profileId },
    });
  }

  /**
   * `ProfileIcon` に関するメソッド、
   * profileIdとpathを受け取って`ProfileIcon` を作成します
   * @param data `profileId` と `path` のプロパティを持つオブジェクトを受け取ります
   * @returns 作成した `ProfileIcon`
   */
  async createProfileIcon(
    data: Prisma.ProfileIconCreateInput,
  ): Promise<ProfileIcon> {
    return this.prisma.profileIcon.create({ data });
  }

  /**
   * `ProfileIcon` に関するメソッド、
   * `profileId`,`path`,`updatedAt`を受け取って`ProfileIcon` を更新します
   * @param where `profileId` のプロパティを持つオブジェクトを受け取ります
   * @param data `path` のプロパティを持つオブジェクトを受け取ります
   * @returns 更新した `ProfileIcon`
   */
  async updateProfileIcon(
    where: Prisma.ProfileIconWhereUniqueInput,
    data: Prisma.ProfileIconUpdateInput,
  ): Promise<ProfileIcon> {
    return this.prisma.profileIcon.update({
      where,
      data,
    });
  }

  /**
   * `ProfileIcon` に関するメソッド、
   * `ProfileIcon` を1つ削除します
   * @param profileId `profileId` を受け取ります
   * @returns 削除した `ProfileIcon`
   */
  async deleteProfileIcon(profileId: string): Promise<ProfileIcon> {
    return this.prisma.profileIcon.delete({ where: { profileId } });
  }
}
