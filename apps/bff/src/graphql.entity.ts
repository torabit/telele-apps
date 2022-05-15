
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract getGame(gameId?: Nullable<number>): Nullable<Game> | Promise<Nullable<Game>>;

    abstract listGame(gameIds?: Nullable<Nullable<number>[]>, gameTitles?: Nullable<Nullable<string>[]>): Nullable<Nullable<Game>[]> | Promise<Nullable<Nullable<Game>[]>>;

    abstract listGamePagination(first?: Nullable<number>, after?: Nullable<string>): Nullable<ListGamePaginationResponse> | Promise<Nullable<ListGamePaginationResponse>>;

    abstract getTag(tagId?: Nullable<number>, tagName?: Nullable<string>): Nullable<Tag> | Promise<Nullable<Tag>>;

    abstract listTag(tagIds?: Nullable<Nullable<number>[]>, tagNames?: Nullable<Nullable<string>[]>, tagCategoryId?: Nullable<number>, tagCategoryName?: Nullable<string>, gameId?: Nullable<number>): Nullable<Tag>[] | Promise<Nullable<Tag>[]>;
}

export class Game {
    id: string;
    languageCode: string;
    title: string;
    publisherId: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Nullable<Date>;
    publisherName?: Nullable<string>;
    gameIconPath?: Nullable<string>;
    tags?: Nullable<Nullable<Tag>[]>;
    followersQuantity?: Nullable<string>;
}

export class Edge {
    cursor: string;
    node: Game;
}

export class PageInfo {
    endCursor: string;
    hasNextPage: boolean;
}

export class ListGamePaginationResponse {
    edges: Edge[];
    pageInfo: PageInfo;
}

export class Tag {
    id: string;
    languageCode: string;
    name: string;
    tagCategoryId: string;
    tagCategoryName: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Nullable<Date>;
}

type Nullable<T> = T | null;
