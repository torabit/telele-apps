import { Prisma } from '@prisma/client_tag';

export const tagData: Prisma.TagCreateInput[] = [
  // -------------------------------------------------------------------------
  // プラットフォーム
  // -------------------------------------------------------------------------

  {
    languageCode: 'JP',
    name: 'PS4',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'Switch',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'PC',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'Xbox',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'スマホ',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'PS5',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ファミコン',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'スーファミ',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'セガサターン',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'メガドライブ',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'PCエンジン',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'PS1',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'PS2',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'PS3',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ゲームキューブ',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'DS',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'PSP',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'Vita',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '3DS',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ゲームボーイアドバンス',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'Xbox One',
    tagCategory: {
      connect: {
        id: 1,
      },
    },
  },

  // -------------------------------------------------------------------------
  // ゲームジャンル
  // -------------------------------------------------------------------------

  {
    languageCode: 'JP',
    name: 'FPS',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'TPS',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'Esports',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '格ゲー',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'カード&ボードゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'TCG',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'RPG',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'MMO',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'RTS',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'VR',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ゲームセンター',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'TRPG',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ファンタジー',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ホラー',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'アクション',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'シューティング',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ノベルゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ギャルゲ',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'エロゲ',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '音ゲー',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ストラテジー',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'レース',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'スポーツ',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'シミュレーション',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '協力プレイ',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '対戦ゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'インディーゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ステルスゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ソロプレイ',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '人狼系',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'MOBA',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'パズル',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '謎解き',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'サバゲー',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'レトロゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ウミガメのスープ',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'マーダーミステリー',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'シューターゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'アドベンチャーゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },

  // -------------------------------------------------------------------------
  // ボイスチャット
  // -------------------------------------------------------------------------

  {
    languageCode: 'JP',
    name: 'Discord',
    tagCategory: {
      connect: {
        id: 3,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'Skype',
    tagCategory: {
      connect: {
        id: 3,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'TeamSpeak',
    tagCategory: {
      connect: {
        id: 3,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '聞き専',
    tagCategory: {
      connect: {
        id: 3,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'LINE',
    tagCategory: {
      connect: {
        id: 3,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'PSN',
    tagCategory: {
      connect: {
        id: 3,
      },
    },
  },

  // -------------------------------------------------------------------------
  // 言語
  // -------------------------------------------------------------------------

  {
    languageCode: 'JP',
    name: '中国語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '英語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'スペイン語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '日本語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '韓国語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ヒンドゥー語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'アラビア語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ベンガル語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '朝鮮語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '台湾語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'マレー語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ロシア語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'フランス語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ポルトガル語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'タイ語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'イタリア語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ベトナム語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ドイツ語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'トルコ語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ポーランド語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ジャワ語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'パンジャーブ語',
    tagCategory: {
      connect: {
        id: 4,
      },
    },
  },

  // -------------------------------------------------------------------------
  // その他
  // -------------------------------------------------------------------------

  {
    languageCode: 'JP',
    name: 'エンジョイ',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'カジュアル',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'VTuber',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'Youtuber',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '配信者',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'おしゃべり',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '実況プレイ',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: '動物',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ロールプレイ',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ガチ勢',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ゲーム初心者',
    tagCategory: {
      connect: {
        id: 5,
      },
    },
  },

  {
    languageCode: 'JP',
    name: '横スクロールゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'オープンワールド',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
  {
    languageCode: 'JP',
    name: 'ドライブ/レースゲーム',
    tagCategory: {
      connect: {
        id: 2,
      },
    },
  },
];
