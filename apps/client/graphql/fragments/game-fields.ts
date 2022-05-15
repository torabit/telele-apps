import { gql } from '@apollo/client';
import { GAME_CATEGORY_FIELDS } from './game-category';

export const GAME_FIELDS = gql`
  ${GAME_CATEGORY_FIELDS}
  fragment GameFields on Game {
    gameId
    title
    publisher
    description
    gameCategoryId
    gameCategory {
      ...GameCategoryFields
    }
  }
`;
