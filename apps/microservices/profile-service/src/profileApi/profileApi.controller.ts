import { Body, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { Metadata } from '@grpc/grpc-js';
import { ProfileService } from 'src/profile/profile.service';
import { ProfileIconService } from 'src/profileIcon/profileIcon.service';
import { FollowGameService } from 'src/relation/followGame/followGame.service';
import { FollowUserService } from 'src/relation/followUser/followUser.service';

import {
  ProfileApiControllerMethods,
  GetProfileRequest,
  ProfileApiController as GrpcProfileApiController,
  UpdateUserIdOnProfileRequest,
  GetProfileIconRequest,
  ListFollowGameRequest,
  ListFollowGameResponse,
  ListFollowUserRequest,
  ListFollowUserResponse,
  GetDogTagRequest,
  ListDogTagRequest,
  ListDogTagResponse,
  GetUserMetadataRequest,
  ListUserMetadataRequest,
  ListUserMetadataResponse,
  BatchListFollowGameRequest,
  BatchListFollowGameResponse,
} from 'grpc/protobuf/profile_api';
import {
  Profile,
  DogTag,
  UserMetadata,
} from 'grpc/protobuf/telele/type/profile';
import { ProfileIcon } from 'grpc/protobuf/telele/type/profile_icon';

import {
  CreateProfileInput,
  UpdateProfileInput,
  DeleteProfileInput,
  UpdateUserIdOnProfileInput,
  CreateProfileIconInput,
  DeleteProfileIconInput,
  UpdateProfileIconInput,
  CreateFollowGameInput,
  DeleteFollowGameInput,
  CreateFollowUserInput,
  DeleteFollowUserInput,
  OptionalProfile,
} from 'src/dto';
import {
  adaptGrpcProfile,
  adaptCreateProfileRequest,
  adaptUpdateProfileRequest,
  adaptGrpcProfileIcon,
  adaptGrpcFollowGame,
  adaptGrpcFollowUser,
  adaptGrpcDogTag,
  adaptGrpcUserMetadata,
} from 'util/adaptDataObj';
import {
  Prisma,
  Profile as PrismaProfile,
  ProfileIcon as PrismaProfileIcon,
  FollowGame as PrismaFollowGame,
  FollowUser as PrismaFollowUser,
} from '@prisma/client_profile';

@ProfileApiControllerMethods()
@UsePipes(new ValidationPipe())
@Controller('profile')
export class ProfileApiController implements GrpcProfileApiController {
  constructor(
    private readonly profileService: ProfileService,
    private readonly profileIconService: ProfileIconService,
    private readonly followGameService: FollowGameService,
    private readonly followUserService: FollowUserService,
  ) {}

  // -------------------------------------------------------------------------
  // Profile
  // -------------------------------------------------------------------------

  async getProfile(
    request: GetProfileRequest,
    metadata?: Metadata,
  ): Promise<Profile> {
    type GetProfileKey = keyof GetProfileRequest;

    let key: GetProfileKey;
    let fetchedProfile: PrismaProfile & { profileIcon: PrismaProfileIcon };

    const { profileId, userId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (profileId) key = 'profileId';
    else if (userId) key = 'userId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'profileId':
        fetchedProfile = await this.profileService.profile({ id: profileId });
        break;

      case 'userId':
        fetchedProfile = await this.profileService.profile({ userId: userId });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not getProfile request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const profile = adaptGrpcProfile(fetchedProfile);

    return profile;
  }

  async createProfile(
    @Body() request: CreateProfileInput,
    metadata?: Metadata,
  ): Promise<void> {
    const payload = adaptCreateProfileRequest(request);

    const result = await this.profileService.createProfile(payload);
  }

  async updateProfile(
    @Body() request: UpdateProfileInput,
    metadata?: Metadata,
  ): Promise<void> {
    type UpdateProfileKey = keyof Prisma.ProfileWhereUniqueInput;

    let key: UpdateProfileKey;

    const { profileId, userId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (profileId) key = 'id';
    else if (userId) key = 'userId';

    const payloadProfile = adaptUpdateProfileRequest(request);

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'id':
        await this.profileService.updateProfile(
          { id: profileId },
          payloadProfile,
        );
        break;
      case 'userId':
        await this.profileService.updateProfile(
          { userId: userId },
          payloadProfile,
        );
        break;
      default:
        const _key: never = key;
        throw new Error(`${_key} is not updateProfile request`);
    }
  }

  async deleteProfile(
    @Body() request: DeleteProfileInput,
    metadata?: Metadata,
  ): Promise<void> {
    type DeleteProfileKey = keyof DeleteProfileInput;

    let key: DeleteProfileKey;

    const { profileId, userId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (profileId) key = 'profileId';
    else if (userId) key = 'userId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'profileId':
        await this.profileService.deleteProfile({ id: profileId });
        break;
      case 'userId':
        await this.profileService.deleteProfile({ userId: userId });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not deleteProfile request`);
    }
  }

  async updateUserIdOnProfile(
    @Body() request: UpdateUserIdOnProfileInput,
    metadata?: Metadata,
  ): Promise<void> {
    type UpdateUserIdOnProfile = keyof Omit<
      UpdateUserIdOnProfileRequest,
      'updatedUserId'
    >;

    let key: UpdateUserIdOnProfile;

    const { profileId, formerUserId, updatedUserId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (profileId) key = 'profileId';
    else if (formerUserId) key = 'formerUserId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'profileId':
        await this.profileService.updateUserIdOnProfile(
          { id: profileId },
          updatedUserId,
        );
        break;

      case 'formerUserId':
        await this.profileService.updateUserIdOnProfile(
          { userId: formerUserId },
          updatedUserId,
        );
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not updateUserIdOnProfile request`);
    }
  }

  // -------------------------------------------------------------------------
  // ProfileIcon
  // -------------------------------------------------------------------------

  async getProfileIcon(
    request: GetProfileIconRequest,
    metadata?: Metadata,
  ): Promise<ProfileIcon> {
    const { profileId } = request;
    const fetchedProfileIcon = await this.profileIconService.profileIcon(
      profileId,
    );

    const profileIcon = adaptGrpcProfileIcon(fetchedProfileIcon);

    return profileIcon;
  }

  async createProfileIcon(
    @Body() request: CreateProfileIconInput,
    metadata?: Metadata,
  ): Promise<void> {
    const result = await this.profileIconService.createProfileIcon(request);
  }

  async updateProfileIcon(
    @Body() request: UpdateProfileIconInput,
    metadata?: Metadata,
  ): Promise<void> {
    const { profileId, path } = request;
    const result = await this.profileIconService.updateProfileIcon(
      { profileId },
      { path },
    );
  }

  async deleteProfileIcon(
    @Body() request: DeleteProfileIconInput,
    metadata?: Metadata,
  ): Promise<void> {
    const { profileId } = request;
    const result = await this.profileIconService.deleteProfileIcon(profileId);
  }

  // -------------------------------------------------------------------------
  // FollowGame
  // -------------------------------------------------------------------------

  async listFollowGame(
    request: ListFollowGameRequest,
    metadata?: Metadata,
  ): Promise<ListFollowGameResponse> {
    type ListFollowGameKey = keyof ListFollowGameRequest;

    let key: ListFollowGameKey;
    let fetchedFollowGames: PrismaFollowGame[];

    const { userId, gameId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (userId) key = 'userId';
    else if (gameId) key = 'gameId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'userId':
        fetchedFollowGames = await this.followGameService.followGames({
          where: { userId },
        });
        break;

      case 'gameId':
        fetchedFollowGames = await this.followGameService.followGames({
          where: { gameId },
        });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not listFollowGame request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const followGames = {
      followGames: fetchedFollowGames.map((fetchedFollowGame) =>
        adaptGrpcFollowGame(fetchedFollowGame),
      ),
    };

    return followGames;
  }

  async createFollowGame(
    @Body() request: CreateFollowGameInput,
    metadata?: Metadata,
  ): Promise<void> {
    const result = await this.followGameService.createFollowGame(request);
  }

  async deleteFollowGame(
    @Body() request: DeleteFollowGameInput,
    metadata?: Metadata,
  ): Promise<void> {
    const { userId, gameId } = request;
    const result = await this.followGameService.deleteFollowGame({
      userId_gameId: {
        userId,
        gameId,
      },
    });
  }

  async batchListFollowGame(
    request: BatchListFollowGameRequest,
    metadata?: Metadata,
  ): Promise<BatchListFollowGameResponse> {
    type BatchListFollowGameKey = keyof BatchListFollowGameRequest;

    let key: BatchListFollowGameKey;

    const listFollowGames = [];
    let followGames: PrismaFollowGame[];

    const { gameIds, userIds } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (gameIds) key = 'gameIds';
    else if (userIds) key = 'userIds';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'gameIds':
        for (const f of gameIds.ids) {
          followGames = await this.followGameService.followGames({
            where: { gameId: f },
          });
          listFollowGames.push(
            Object.create({
              followGames: followGames.map((followGame) =>
                adaptGrpcFollowGame(followGame),
              ),
            }),
          );
        }
        break;

      case 'userIds':
        for (const f of userIds.ids) {
          followGames = await this.followGameService.followGames({
            where: { userId: f },
          });
          listFollowGames.push(
            Object.create({
              followGames: followGames.map((followGame) =>
                adaptGrpcFollowGame(followGame),
              ),
            }),
          );
        }
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not batchListFollowGame request`);
    }

    return { listFollowGames };
  }

  // -------------------------------------------------------------------------
  // FollowUser
  // -------------------------------------------------------------------------

  async listFollowUser(
    request: ListFollowUserRequest,
    metadata?: Metadata,
  ): Promise<ListFollowUserResponse> {
    type ListFollowUserKey = keyof ListFollowUserRequest;

    let key: ListFollowUserKey;
    let fetchedFollowUsers: PrismaFollowUser[];

    const { userId, followUserId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (userId) key = 'userId';
    else if (followUserId) key = 'followUserId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'userId':
        fetchedFollowUsers = await this.followUserService.followUsers({
          where: { userId },
        });
        break;

      case 'followUserId':
        fetchedFollowUsers = await this.followUserService.followUsers({
          where: { followUserId },
        });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not listFollowUser request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const followUsers = {
      followUsers: fetchedFollowUsers.map((fetchedFollowUser) =>
        adaptGrpcFollowUser(fetchedFollowUser),
      ),
    };

    return followUsers;
  }

  async createFollowUser(
    @Body() request: CreateFollowUserInput,
    metadata?: Metadata,
  ): Promise<void> {
    const result = await this.followUserService.createFollowUser(request);
  }

  async deleteFollowUser(
    @Body() request: DeleteFollowUserInput,
    metadata?: Metadata,
  ): Promise<void> {
    const { userId, followUserId } = request;
    const result = await this.followUserService.deleteFollowUser({
      userId_followUserId: {
        userId,
        followUserId,
      },
    });
  }

  async getDogTag(
    request: GetDogTagRequest,
    metadata?: Metadata,
  ): Promise<DogTag> {
    const { userId } = request;
    let fetchedProfile: OptionalProfile;

    fetchedProfile = await this.profileService.optionalProfile({
      where: { userId: userId },
      select: {
        userId: true,
        name: true,
        biography: true,
        followGame: true,
        profileIcon: true,
      },
    });

    const dogTag = adaptGrpcDogTag(fetchedProfile);

    return dogTag;
  }

  async listDogTag(
    request: ListDogTagRequest,
    metadata?: Metadata,
  ): Promise<ListDogTagResponse> {
    const { userIds } = request;
    let fetchedProfiles: OptionalProfile[];

    fetchedProfiles = await this.profileService.profiles({
      where: { userId: { in: userIds } },
      select: {
        userId: true,
        name: true,
        biography: true,
        followGame: true,
        profileIcon: true,
      },
    });

    const dogTags = fetchedProfiles.map((fetchedProfile) =>
      adaptGrpcDogTag(fetchedProfile),
    );

    return { dogTags: dogTags };
  }

  async getUserMetadata(
    request: GetUserMetadataRequest,
    metadata?: Metadata,
  ): Promise<UserMetadata> {
    const { userId } = request;
    let fetchedProfile: OptionalProfile;

    fetchedProfile = await this.profileService.optionalProfile({
      where: { userId: userId },
      select: {
        userId: true,
        name: true,
        profileIcon: true,
      },
    });

    const userMetadata = adaptGrpcUserMetadata(fetchedProfile);

    return userMetadata;
  }

  async listUserMetadata(
    request: ListUserMetadataRequest,
    metadata?: Metadata,
  ): Promise<ListUserMetadataResponse> {
    const { userIds } = request;
    let fetchedProfiles: OptionalProfile[];

    fetchedProfiles = await this.profileService.profiles({
      where: { userId: { in: userIds } },
      select: {
        userId: true,
        name: true,
        profileIcon: true,
      },
    });

    const listUserMetadata = fetchedProfiles.map((fetchedProfile) =>
      adaptGrpcUserMetadata(fetchedProfile),
    );

    return { userMetadata: listUserMetadata };
  }
}
