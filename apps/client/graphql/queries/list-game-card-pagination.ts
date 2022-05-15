import { gql } from '@apollo/client';
import { ListGamePaginationResponse } from '@/bff/src/graphql.entity';

export const LIST_GAME_CARD_PAGINATION = gql`
  query listGamePagination($first: Int, $after: String) {
    listGamePagination(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          title
          gameIconPath
          followersQuantity
          tags {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export interface GamesData {
  listGamePagination: ListGamePaginationResponse;
}
