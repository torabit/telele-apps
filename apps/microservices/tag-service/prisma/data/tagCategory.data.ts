import { Prisma } from '@prisma/client_tag';

export const tagCategoryData: Prisma.TagCategoryCreateInput[] = [
  {
    languageCode: 'JP',
    name: 'プラットフォーム',
  },
  {
    languageCode: 'JP',
    name: 'ゲームジャンル',
  },
  {
    languageCode: 'JP',
    name: 'ボイスチャット',
  },
  {
    languageCode: 'JP',
    name: '言語',
  },
  {
    languageCode: 'JP',
    name: 'その他',
  },
];
