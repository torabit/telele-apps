import { gql } from '@apollo/client';

export const GAME_CATEGORY_FIELDS = gql`
  fragment GameCategoryFields on GameCategory {
    gameCategoryId
    languageCode
    name
  }
`;
