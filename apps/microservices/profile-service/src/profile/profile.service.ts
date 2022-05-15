import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Profile, ProfileIcon } from '@prisma/client_profile';
import { OptionalProfile } from 'src/dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * `Profile` に関するメソッド、
   * ユニークなフィールドを受け取って `Profile` 単体を返します
   * @param profileWhereUniqueInput `profileId` または `userId`
   * @returns `Profile`
   */
  async profile(
    profileWhereUniqueInput: Prisma.ProfileWhereUniqueInput,
  ): Promise<Profile & { profileIcon: ProfileIcon }> {
    return await this.prisma.profile.findUnique({
      where: profileWhereUniqueInput,
      include: { profileIcon: true },
    });
  }

  /**
   *
   * @param params
   * @property select 必要なプロパティを `true` にしてください
   * @property where
   * @returns `OptionalProfile`
   */
  async profiles(params?: {
    select?: Prisma.ProfileSelect;
    where?: Prisma.ProfileWhereInput;
  }): Promise<OptionalProfile[]> {
    const { select, where } = params;

    return await this.prisma.profile.findMany({ where, select });
  }

  /**
   *
   * @param params
   * @property select 必要なプロパティを `true` にしてください
   * @property where ユニークなフィールドを受け取ります
   * @returns `OptionalProfile`
   */
  async optionalProfile(params?: {
    select?: Prisma.ProfileSelect;
    where?: Prisma.ProfileWhereUniqueInput;
  }): Promise<OptionalProfile> {
    const { select, where } = params;
    return await this.prisma.profile.findUnique({ where, select });
  }

  /**
   * `Profile` に関するメソッド、
   * `Profile` を新しく作成します
   * @param data `userId` と `name` が必須プロパティのobject
   * @returns 作成した `Profile`
   */
  async createProfile(data: Prisma.ProfileCreateInput): Promise<Profile> {
    return this.prisma.profile.create({ data });
  }

  /**
   * `Profile` に関するメソッド、
   * `profileId` と `userId` 以外の `Profile` を更新します
   * @param where `profileId` または `userId` を受け取ります
   * @param data 変更したいプロパティを入力してください
   * @returns 更新した `Profile`
   */
  async updateProfile(
    where: Prisma.ProfileWhereUniqueInput,
    data: Prisma.ProfileUpdateInput,
  ): Promise<Profile> {
    return this.prisma.profile.update({ where: where, data });
  }

  /**
   * `Profile` に関するメソッド、
   * `Profile` を1つ削除します
   * @param where `profileId` または `userId` を受け取ります
   * @returns 削除した `Profile`
   */
  async deleteProfile(where: Prisma.ProfileWhereUniqueInput): Promise<Profile> {
    return this.prisma.profile.delete({ where });
  }

  /**
   * `Profile` に関するメソッド、
   * `Profile` の `userId` を更新します
   * @param where `profileId` または `userId` を受け取ります
   * @param userId 更新する新しい`userId` を受け取ります
   * @returns 更新した `Profile`
   */
  async updateUserIdOnProfile(
    where: Prisma.ProfileWhereUniqueInput,
    userId: string,
  ): Promise<Profile> {
    return this.prisma.profile.update({
      where,
      data: { userId: userId },
    });
  }
}
