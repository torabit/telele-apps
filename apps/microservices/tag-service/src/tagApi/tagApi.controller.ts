import { Metadata } from '@grpc/grpc-js';
import { Body, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { TagService } from 'src/tag/tag.service';
import { TagCategoryService } from 'src/tagCategory/tagCategory.service';
import { GameTagService } from 'src/relation/gameTag/gameTag.service';
import { UserTagService } from 'src/relation/userTag/userTag.service';
import { PartyTagService } from 'src/relation/partyTag/partyTag.service';
import {
  adaptGrpcTag,
  adaptGrpcTagCategory,
  adaptGrpcGameTag,
  adaptGrpcUserTag,
  adaptGrpcPartyTag,
} from 'util/adaptGrpcDateObj';

import {
  Tag as PrismaTag,
  TagCategory as PrismaTagCategory,
  GameTag as PrismaGameTag,
  UserTag as PrismaUserTag,
  PartyTag as PrismaPartyTag,
} from '@prisma/client_tag';
import { Tag } from 'grpc/protobuf/telele/type/tag';
import { TagCategory } from 'grpc/protobuf/telele/type/tag_category';
import {
  TagApiControllerMethods,
  GetTagRequest,
  ListTagRequest,
  ListTagResponse,
  TagApiController as GrpcTagApiController,
  GetTagCategoryRequest,
  ListTagCategoriesRequest,
  ListTagCategoriesResponse,
  ListGameTagsRequest,
  ListGameTagsResponse,
  ListUserTagsRequest,
  ListUserTagsResponse,
  ListPartyTagsRequest,
  ListPartyTagsResponse,
  BatchListTagByGameIdRequest,
  BatchListTagByGameIdResponse,
} from 'grpc/protobuf/tag_api';
import { PartyTagInput, UserTagInput } from 'src/dto';

@TagApiControllerMethods()
@UsePipes(new ValidationPipe())
@Controller('tag')
export class TagApiController implements GrpcTagApiController {
  constructor(
    private readonly tagService: TagService,
    private readonly tagCategoryService: TagCategoryService,
    private readonly gameTagService: GameTagService,
    private readonly userTagService: UserTagService,
    private readonly partyTagService: PartyTagService,
  ) {}

  async getTag(request: GetTagRequest, metadata?: Metadata): Promise<Tag> {
    type GetTagKey = keyof GetTagRequest;

    let key: GetTagKey;
    let fetchedTag: PrismaTag & { tagCategory: PrismaTagCategory };

    const { id, name } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (id) key = 'id';
    else if (name) key = 'name';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'id':
        fetchedTag = await this.tagService.tag({ id: id });
        break;

      case 'name':
        fetchedTag = await this.tagService.tag({ name: name });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not getTag request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const tag = adaptGrpcTag(fetchedTag);

    return tag;
  }

  async listTag(
    request: ListTagRequest,
    metadata?: Metadata,
  ): Promise<ListTagResponse> {
    type ListTagKey = keyof ListTagRequest;

    let key: ListTagKey;
    let fetchedTags: (PrismaTag & { tagCategory: PrismaTagCategory })[];

    const { tagIds, tagNames, tagCategoryId, tagCategoryName, gameId } =
      request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (tagIds) key = 'tagIds';
    else if (tagNames) key = 'tagNames';
    else if (tagCategoryId) key = 'tagCategoryId';
    else if (tagCategoryName) key = 'tagCategoryName';
    else if (gameId) key = 'gameId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'tagIds':
        fetchedTags = await this.tagService.tags({
          where: { id: { in: tagIds.ids } },
        });
        break;

      case 'tagNames':
        fetchedTags = await this.tagService.tags({
          where: { name: { in: tagNames.names } },
        });
        break;

      case 'tagCategoryId':
        fetchedTags = await this.tagService.tags({
          where: { tagCategoryId: tagCategoryId },
        });
        break;

      case 'tagCategoryName':
        const fetchedTagCategoryWithTags =
          await this.tagCategoryService.tagCategory(
            { name: tagCategoryName },
            true,
          );

        // tagCategoryから一度tagの配列を取り出してtagCategoryのみのObjを作成
        const { tags: {} = {}, ...tagCategory } = fetchedTagCategoryWithTags;

        // 先ほど作成したtagCategoryを持つtagを作成
        fetchedTags = fetchedTagCategoryWithTags.tags.map((tag) =>
          Object.create({ ...tag, tagCategory: tagCategory }),
        );
        break;

      case 'gameId':
        // 一度GameTagのテーブルからgameIdに一致するRelationの配列を取得
        const gameTags = await this.gameTagService.gameTags({ gameId });
        // tagIDの配列を作成
        const fetchedTagIds = gameTags.map((gameTag) => gameTag.tagId);
        fetchedTags = await this.tagService.tags({
          where: { id: { in: fetchedTagIds } },
        });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not listTag request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const tags = {
      tags: fetchedTags.map((fetchedTag) => adaptGrpcTag(fetchedTag)),
    };

    return tags;
  }

  async batchListTagByGameId(
    request: BatchListTagByGameIdRequest,
    metadata?: Metadata,
  ): Promise<BatchListTagByGameIdResponse> {
    const { gameIds } = request;
    const listTags = [];
    for (const t of gameIds) {
      const gameTags = await this.gameTagService.gameTags({
        gameId: t,
      });
      const fetchedTagIds = gameTags.map((gameTag) => gameTag.tagId);
      const fetchedTags = await this.tagService.tags({
        where: { id: { in: fetchedTagIds } },
      });
      listTags.push(
        Object.create({
          tags: fetchedTags.map((fetchedTag) => adaptGrpcTag(fetchedTag)),
        }),
      );
    }

    return { listTags };
  }

  async getTagCategory(
    request: GetTagCategoryRequest,
    metadata?: Metadata,
  ): Promise<TagCategory> {
    type GetTagCategoryKey = keyof GetTagCategoryRequest;

    let key: GetTagCategoryKey;
    let fetchedTagCategory: PrismaTagCategory;

    const { id, name } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (id) key = 'id';
    else if (name) key = 'name';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'id':
        fetchedTagCategory = await this.tagCategoryService.tagCategory(
          { id: id },
          false,
        );
        break;

      case 'name':
        fetchedTagCategory = await this.tagCategoryService.tagCategory(
          { name: name },
          false,
        );
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not getTagCategory request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const tagCategory = adaptGrpcTagCategory(fetchedTagCategory);

    return tagCategory;
  }

  async listTagCategories(
    request: ListTagCategoriesRequest,
    metadata?: Metadata,
  ): Promise<ListTagCategoriesResponse> {
    type ListTagCategoriesKey = keyof ListTagCategoriesRequest;

    let key: ListTagCategoriesKey;
    let fetchedTagCategories: PrismaTagCategory[];

    const { tagCategoryIds, tagCategoryNames } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (tagCategoryIds) key = 'tagCategoryIds';
    else if (tagCategoryNames) key = 'tagCategoryNames';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'tagCategoryIds':
        fetchedTagCategories = await this.tagCategoryService.tagCategories({
          where: { id: { in: tagCategoryIds.ids } },
        });

        break;

      case 'tagCategoryNames':
        fetchedTagCategories = await this.tagCategoryService.tagCategories({
          where: { name: { in: tagCategoryNames.names } },
        });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not listTagCategories request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const tagCategories = {
      tagCategories: fetchedTagCategories.map((fetchedTagCategory) =>
        adaptGrpcTagCategory(fetchedTagCategory),
      ),
    };

    return tagCategories;
  }

  async listGameTags(
    request: ListGameTagsRequest,
    metadata?: Metadata,
  ): Promise<ListGameTagsResponse> {
    type ListGameTagsKey = keyof ListGameTagsRequest;

    let key: ListGameTagsKey;
    let fetchedGameTags: PrismaGameTag[];

    const { gameId, tagId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (gameId) key = 'gameId';
    else if (tagId) key = 'tagId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'gameId':
        fetchedGameTags = await this.gameTagService.gameTags({ gameId });
        break;

      case 'tagId':
        fetchedGameTags = await this.gameTagService.gameTags({ tagId });
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not listGameTags request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const gameTags = {
      gameTags: fetchedGameTags.map((fetchedGameTag) =>
        adaptGrpcGameTag(fetchedGameTag),
      ),
    };

    return gameTags;
  }

  async listUserTags(
    request: ListUserTagsRequest,
    metadata?: Metadata,
  ): Promise<ListUserTagsResponse> {
    type ListUserTagsKey = keyof ListUserTagsRequest;

    let key: ListUserTagsKey;
    let fetchedUserTags: PrismaUserTag[];

    const { userId, tagId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (userId) key = 'userId';
    else if (tagId) key = 'tagId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'userId':
        fetchedUserTags = await this.userTagService.userTags<string>(
          userId,
          'userId',
        );
        break;

      case 'tagId':
        fetchedUserTags = await this.userTagService.userTags<number>(
          tagId,
          'tagId',
        );
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not listUserTags request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const userTags = {
      userTags: fetchedUserTags.map((fetchedUserTag) =>
        adaptGrpcUserTag(fetchedUserTag),
      ),
    };

    return userTags;
  }

  async createUserTag(
    @Body() request: UserTagInput,
    metadata?: Metadata,
  ): Promise<void> {
    const { userId, tagId } = request;
    const result = await this.userTagService.createUserTag({
      userId: userId,
      tagId: tagId,
    });
  }

  async deleteUserTag(
    @Body() request: UserTagInput,
    metadata?: Metadata,
  ): Promise<void> {
    const { userId, tagId } = request;
    const result = await this.userTagService.deleteUserTag({
      userId_tagId: {
        userId: userId,
        tagId: tagId,
      },
    });
  }

  async listPartyTags(
    request: ListPartyTagsRequest,
    metadata?: Metadata,
  ): Promise<ListPartyTagsResponse> {
    type ListPartyTagsKey = keyof ListPartyTagsRequest;

    let key: ListPartyTagsKey;
    let fetchedPartyTags: PrismaPartyTag[];

    const { partyId, tagId } = request;

    // oneofで受け取ったrequestによってkeyの値を変更
    if (partyId) key = 'partyId';
    else if (tagId) key = 'tagId';

    // keyに応じてPrismaServiceに投げるリクエストを変更する
    switch (key) {
      case 'partyId':
        fetchedPartyTags = await this.partyTagService.partyTags<number>(
          partyId,
          'partyId',
        );
        break;

      case 'tagId':
        fetchedPartyTags = await this.partyTagService.partyTags<number>(
          tagId,
          'tagId',
        );
        break;

      default:
        const _key: never = key;
        throw new Error(`${_key} is not listPartyTags request`);
    }

    // grpc通信のためにDateをGoogleTimestampに変換
    const partyTags = {
      partyTags: fetchedPartyTags.map((fetchedPartyTag) =>
        adaptGrpcPartyTag(fetchedPartyTag),
      ),
    };

    return partyTags;
  }

  async createPartyTag(
    @Body() request: PartyTagInput,
    metadata?: Metadata,
  ): Promise<void> {
    const { partyId, tagId } = request;
    const result = await this.partyTagService.createPartyTag({
      partyId: partyId,
      tagId: tagId,
    });
  }

  async deletePartyTag(
    @Body() request: PartyTagInput,
    metadata?: Metadata,
  ): Promise<void> {
    const { partyId, tagId } = request;
    const result = await this.partyTagService.deletePartyTag({
      partyId_tagId: {
        partyId: partyId,
        tagId: tagId,
      },
    });
  }
}
