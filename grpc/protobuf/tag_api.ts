/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';
import { Tag } from './telele/type/tag';
import { TagCategory } from './telele/type/tag_category';
import { GameTag } from './telele/type/game_tag';
import { UserTag } from './telele/type/user_tag';
import { PartyTag } from './telele/type/party_tag';
import { Metadata } from '@grpc/grpc-js';
import { Empty } from './google/protobuf/empty';

export const protobufPackage = 'telele.api';

export interface Ids {
  ids: number[];
}

export interface Names {
  names: string[];
}

/**
 * - search_optionにある1つのフィールドを検索してTagを返します
 *  - id   tag_idを受け取ります、これはユニークなフィールドです
 *  - name tag_nameを受け取ります、これはユニークなフィールドです
 */
export interface GetTagRequest {
  id: number | undefined;
  name: string | undefined;
}

/**
 * - search_optionにある1つのフィールドを検索してTagの配列を返します
 *  - tag_ids           tag_idの配列を受け取ります、これはユニークなフィールドです
 *  - tag_names         tag_namesの配列を受け取ります、これはユニークなフィールドです
 *  - tag_category_id   tag_category_idを受け取ります
 *  - tag_category_name tag_category_nameを受け取ります
 *  - game_id           game_idを受け取ります
 */
export interface ListTagRequest {
  tagIds: Ids | undefined;
  tagNames: Names | undefined;
  tagCategoryId: number | undefined;
  tagCategoryName: string | undefined;
  gameId: number | undefined;
}

export interface ListTagResponse {
  tags: Tag[];
}

export interface BatchListTagByGameIdRequest {
  gameIds: number[];
}

export interface BatchListTagByGameIdResponse {
  listTags: Tags[];
}

export interface Tags {
  tags: Tag[];
}

/**
 * - search_optionにある1つのフィールドを検索してTagCategoryを返します
 *  - id   tag_category_idを受け取ります、これはユニークなフィールドです
 *  - name tag_category_nameを受け取ります、これはユニークなフィールドです
 */
export interface GetTagCategoryRequest {
  id: number | undefined;
  name: string | undefined;
}

/**
 * - search_optionにある1つのフィールドを検索してTagCategoryの配列を返します
 *  - tag_category_ids    tag_category_idsの配列を受け取ります、これはユニークなフィールドです
 *  - tag_category_names  tag_category_namesの配列を受け取ります、これはユニークなフィールドです
 */
export interface ListTagCategoriesRequest {
  tagCategoryIds: Ids | undefined;
  tagCategoryNames: Names | undefined;
}

export interface ListTagCategoriesResponse {
  tagCategories: TagCategory[];
}

/**
 * - search_optionにある1つのフィールドを検索してGameTagの配列を返します
 *  - gameId　gameIdを受け取ります
 *  - tag_id　 tag_idを受け取ります
 */
export interface ListGameTagsRequest {
  gameId: number | undefined;
  tagId: number | undefined;
}

export interface ListGameTagsResponse {
  gameTags: GameTag[];
}

/**
 * - search_optionにある1つのフィールドを検索してUserTagの配列を返します
 *  - user_id　user_idを受け取ります
 *  - tag_id　 tag_idを受け取ります
 */
export interface ListUserTagsRequest {
  userId: string | undefined;
  tagId: number | undefined;
}

export interface ListUserTagsResponse {
  userTags: UserTag[];
}

/**
 * user_idとtag_idを受け取って新しいUserTagを1つ作成します
 *  - user_id　user_idを受け取ります
 *  - tag_id　 tag_idを受け取ります
 */
export interface CreateUserTagRequest {
  userId: string;
  tagId: number;
}

/**
 * user_idとtag_idから成る結合キーに一致するUserTagを1つ削除します
 *  - user_id　user_idを受け取ります
 *  - tag_id　 tag_idを受け取ります
 */
export interface DeleteUserTagRequest {
  userId: string;
  tagId: number;
}

/**
 * - search_optionにある1つのフィールドを検索してPartyTagの配列を返します
 *  - party_id　party_idを受け取ります
 *  - tag_id　  tag_idを受け取ります
 */
export interface ListPartyTagsRequest {
  partyId: number | undefined;
  tagId: number | undefined;
}

export interface ListPartyTagsResponse {
  partyTags: PartyTag[];
}

/**
 * party_idとtag_idを受け取って新しいPartyTagを1つ作成します
 *  - party_id　party_idを受け取ります
 *  - tag_id　 tag_idを受け取ります
 */
export interface CreatePartyTagRequest {
  partyId: number;
  tagId: number;
}

/**
 * party_idとtag_idから成る結合キーに一致するPartyTagを1つ削除します
 *  - party_id　party_idを受け取ります
 *  - tag_id　 tag_idを受け取ります
 */
export interface DeletePartyTagRequest {
  partyId: number;
  tagId: number;
}

export const TELELE_API_PACKAGE_NAME = 'telele.api';

/**
 * TagApiはtag-serviceにある `Tag` , `TagCategory` , `GameTag` , `UserTag`, `PartyTag` を返します
 * `UserTag`, `PartyTag` はそれぞれ作成、削除が可能です
 */

export interface TagApiClient {
  /** ユニークなフィールドを1つ受け取ってTagを1つ返します */

  getTag(request: GetTagRequest, metadata?: Metadata): Observable<Tag>;

  /** 与えられた引数に応じてTagの配列を返します */

  listTag(request: ListTagRequest, metadata?: Metadata): Observable<ListTagResponse>;

  batchListTagByGameId(
    request: BatchListTagByGameIdRequest,
    metadata?: Metadata
  ): Observable<BatchListTagByGameIdResponse>;

  /** ユニークなフィールドを1つ受け取ってTagCategoryを1つ返します */

  getTagCategory(request: GetTagCategoryRequest, metadata?: Metadata): Observable<TagCategory>;

  /** 与えられた引数に応じてTagCategoryの配列を返します */

  listTagCategories(
    request: ListTagCategoriesRequest,
    metadata?: Metadata
  ): Observable<ListTagCategoriesResponse>;

  /** 与えられた引数に応じてGameTagの配列を返します */

  listGameTags(request: ListGameTagsRequest, metadata?: Metadata): Observable<ListGameTagsResponse>;

  /** 与えられた引数に応じてUserTagの配列を返します */

  listUserTags(request: ListUserTagsRequest, metadata?: Metadata): Observable<ListUserTagsResponse>;

  /** userIdとtag_idを受け取って新しいUserTagを作成します */

  createUserTag(request: CreateUserTagRequest, metadata?: Metadata): Observable<Empty>;

  /** userIdとtag_idから成る結合キーに一致するUserTagを1つ削除します */

  deleteUserTag(request: DeleteUserTagRequest, metadata?: Metadata): Observable<Empty>;

  /** 与えられた引数に応じてPartyTagの配列を返します */

  listPartyTags(
    request: ListPartyTagsRequest,
    metadata?: Metadata
  ): Observable<ListPartyTagsResponse>;

  /** party_idとtag_idを受け取って新しいPartyTagを作成します */

  createPartyTag(request: CreatePartyTagRequest, metadata?: Metadata): Observable<Empty>;

  /** party_idとtag_idから成る結合キーに一致するPartyTagを1つ削除します */

  deletePartyTag(request: DeletePartyTagRequest, metadata?: Metadata): Observable<Empty>;
}

/**
 * TagApiはtag-serviceにある `Tag` , `TagCategory` , `GameTag` , `UserTag`, `PartyTag` を返します
 * `UserTag`, `PartyTag` はそれぞれ作成、削除が可能です
 */

export interface TagApiController {
  /** ユニークなフィールドを1つ受け取ってTagを1つ返します */

  getTag(request: GetTagRequest, metadata?: Metadata): Promise<Tag> | Observable<Tag> | Tag;

  /** 与えられた引数に応じてTagの配列を返します */

  listTag(
    request: ListTagRequest,
    metadata?: Metadata
  ): Promise<ListTagResponse> | Observable<ListTagResponse> | ListTagResponse;

  batchListTagByGameId(
    request: BatchListTagByGameIdRequest,
    metadata?: Metadata
  ):
    | Promise<BatchListTagByGameIdResponse>
    | Observable<BatchListTagByGameIdResponse>
    | BatchListTagByGameIdResponse;

  /** ユニークなフィールドを1つ受け取ってTagCategoryを1つ返します */

  getTagCategory(
    request: GetTagCategoryRequest,
    metadata?: Metadata
  ): Promise<TagCategory> | Observable<TagCategory> | TagCategory;

  /** 与えられた引数に応じてTagCategoryの配列を返します */

  listTagCategories(
    request: ListTagCategoriesRequest,
    metadata?: Metadata
  ):
    | Promise<ListTagCategoriesResponse>
    | Observable<ListTagCategoriesResponse>
    | ListTagCategoriesResponse;

  /** 与えられた引数に応じてGameTagの配列を返します */

  listGameTags(
    request: ListGameTagsRequest,
    metadata?: Metadata
  ): Promise<ListGameTagsResponse> | Observable<ListGameTagsResponse> | ListGameTagsResponse;

  /** 与えられた引数に応じてUserTagの配列を返します */

  listUserTags(
    request: ListUserTagsRequest,
    metadata?: Metadata
  ): Promise<ListUserTagsResponse> | Observable<ListUserTagsResponse> | ListUserTagsResponse;

  /** userIdとtag_idを受け取って新しいUserTagを作成します */

  createUserTag(request: CreateUserTagRequest, metadata?: Metadata): void;

  /** userIdとtag_idから成る結合キーに一致するUserTagを1つ削除します */

  deleteUserTag(request: DeleteUserTagRequest, metadata?: Metadata): void;

  /** 与えられた引数に応じてPartyTagの配列を返します */

  listPartyTags(
    request: ListPartyTagsRequest,
    metadata?: Metadata
  ): Promise<ListPartyTagsResponse> | Observable<ListPartyTagsResponse> | ListPartyTagsResponse;

  /** party_idとtag_idを受け取って新しいPartyTagを作成します */

  createPartyTag(request: CreatePartyTagRequest, metadata?: Metadata): void;

  /** party_idとtag_idから成る結合キーに一致するPartyTagを1つ削除します */

  deletePartyTag(request: DeletePartyTagRequest, metadata?: Metadata): void;
}

export function TagApiControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getTag',
      'listTag',
      'batchListTagByGameId',
      'getTagCategory',
      'listTagCategories',
      'listGameTags',
      'listUserTags',
      'createUserTag',
      'deleteUserTag',
      'listPartyTags',
      'createPartyTag',
      'deletePartyTag',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('TagApi', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('TagApi', method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const TAG_API_SERVICE_NAME = 'TagApi';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
