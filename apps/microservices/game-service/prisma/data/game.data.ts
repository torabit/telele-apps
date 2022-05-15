import { Prisma } from '@prisma/client_game';

export const gameData: Prisma.GameCreateInput[] = [
  {
    languageCode: 'JP',
    title: 'Dota 2',
    publisher: {
      connect: {
        id: 1,
      },
    },
    description:
      '『Dota 2』（ドータ・ツー）は、Valve Corporationが開発したWindows、Linux用チームストラテジーゲーム・Defense of the Ancients型ゲーム。',
    releaseDate: new Date('2013/07/09 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'League of Legends',
    publisher: {
      connect: {
        id: 2,
      },
    },
    description:
      '『リーグ・オブ・レジェンド』（League of Legends、略称: LoL（ロル））は、ライアットゲームズが開発した基本プレイ無料のマルチプレイヤーオンラインバトルアリーナ（MOBA）。対応プラットフォームは、Microsoft Windows、macOS。多くのゲームレビューサイトなどで高評価を得ており、2012年、世界で最もプレイヤー数の多いPCゲームとされている。アメリカではプロスポーツ選手用のビザが認定されるなど、プロゲーマーが競い合うエレクトロニック・スポーツの種目としても注目されている。',
    releaseDate: new Date('2009/10/27 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'VALORANT',
    publisher: {
      connect: {
        id: 2,
      },
    },
    description:
      '『VALORANT』（ヴァロラント）は、ライアットゲームズが開発・運営している基本プレイ無料のファーストパーソン・シューティングゲーム (FPS)。ライアットゲームズによる初のFPSジャンルの作品であり、2020年6月2日にMicrosoft Windows向けにリリースされた。',
    releaseDate: new Date('2020/06/02 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Apex Legends',
    publisher: {
      connect: {
        id: 3,
      },
    },
    description:
      '『エーペックスレジェンズ』 は、Respawn Entertainmentが開発し、エレクトロニック・アーツより2019年2月4日に配信を開始した基本プレイ無料のバトルロイヤルゲーム形式のファーストパーソン・シューティング。対応プラットフォームは、Microsoft Windows、PlayStation 5、PlayStation 4、Xbox Series X/S、Xbox One、Nintendo Switch。それぞれ条件や仕様が異なるが、クロスプレイにも対応している。',
    releaseDate: new Date('2019/02/04 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Minecraft',
    publisher: {
      connect: {
        id: 4,
      },
    },
    description:
      'Minecraft（マインクラフト）は、マルクス・ペルソン（ノッチ）とMojang Studiosの社員が開発したサンドボックスビデオゲームである。日本国内では「マイクラ」と略称され、サバイバル生活を楽しんだり、自由にブロックを配置し建築などを楽しめる。2009年にパブリックアルファ版をリリース、2011年11月に正式リリースし、そのころにJens Bergensten（英語版）が開発を引き継いだ。それ以来、Minecraftはさまざまなプラットフォームに移植され、世界でもっとも売れたゲームとなった。2020年には世界のビデオゲームの殿堂入りを果たすなど、Minecraftは様々な賞の受賞歴を誇る。',
    releaseDate: new Date('2011/11/01 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Fortnite',
    publisher: {
      connect: {
        id: 5,
      },
    },
    description:
      '『フォートナイト』 は、Epic Gamesが販売・配信する、2017年に公開されたオンラインゲーム。クラフト要素のあるサードパーソン・シューティングゲームであり、PvEアクションやバトルロイヤル、サンドボックスといった異なるゲームジャンルのゲームモードを提供している。',
    releaseDate: new Date('2017/7/21 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'ELDEN RING',
    publisher: {
      connect: {
        id: 6,
      },
    },
    description:
      '『ELDEN RING』は、フロム・ソフトウェアが開発し、2022年2月25日に発売されたオープンワールドのアクションRPG。 海外での販売はバンダイナムコエンターテインメントが担当する。 キャッチコピーは「王となれ」。',
    releaseDate: new Date('2022/2/25 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Grand Theft Auto V',
    publisher: {
      connect: {
        id: 7,
      },
    },
    description:
      '『グランド・セフト・オートV』は、アメリカ合衆国のニューヨークにあるロックスター・ゲームス社から発売されたオープンワールド型クライムアクションゲームである。グランド・セフト・オートシリーズの第11作目。略称は『GTAV』。 2022年現在、『Minecraft』に次ぎ、世界で2番目に売り上げたゲームソフトである。',
    releaseDate: new Date('2013/9/17 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Call of Duty: Warzone',
    publisher: {
      connect: {
        id: 8,
      },
    },
    description:
      '『コール オブ デューティ ウォーゾーン』は、2020年3月10日に配信されたPlayStation 5、Xbox Series X、Xbox One、PlayStation 4、PC向けの基本プレイ無料のバトルロイヤルゲームである。',
    releaseDate: new Date('2020/3/10 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'LOST ARK',
    publisher: {
      connect: {
        id: 9,
      },
    },
    description:
      'Lost Arkは、トップダウンの2.5Dファンタジーの大規模マルチプレイヤーオンラインアクションロールプレイングゲームです。これは、TripodStudioとSmilegateのゲーム開発子会社であるSmilegateRPGによって共同開発されています。 2019年12月4日に韓国で完全にリリースされました。',
    releaseDate: new Date('2019/12/14 00:00:00'),
  },
  // -------------------------------------------------------------------------
  // 10
  // -------------------------------------------------------------------------

  {
    languageCode: 'JP',
    title: 'Hearthstone',
    publisher: {
      connect: {
        id: 10,
      },
    },
    description:
      '『ハースストーン』はブリザード・エンターテイメントが開発したデジタルコレクティブルカードゲーム。2013年の3月にPenny Arcade Expoにて発表され、2014年3月11日にリリースされた。 『ウォークラフト』シリーズの世界観を背景とする、デジタルカードゲームとして開発された。',
    releaseDate: new Date('2014/3/11 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Sea of Thieves',
    publisher: {
      connect: {
        id: 11,
      },
    },
    description:
      'Sea of Thievesは、Rareによって開発され、MicrosoftStudiosによって公開された2018年の一人称アクションアドベンチャーゲームです。ゲームでは、プレイヤーは海賊船を介してオープンワールドを探索します。このゲームは「シェアードワールドアドベンチャーゲーム」と呼ばれます。',
    releaseDate: new Date('2018/3/20 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Dead by Daylight',
    publisher: {
      connect: {
        id: 11,
      },
    },
    description:
      '『Dead by Daylight』は、カナダのゲーム会社Behaviour Interactiveが開発し、Starbreeze Studiosより発売された非対称型対戦サバイバルホラーゲーム。',
    releaseDate: new Date('2016/6/14 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'World of Warcraft',
    publisher: {
      connect: {
        id: 10,
      },
    },
    description: '',
    releaseDate: new Date('2004/11/23 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Counter-Strike: Global Offensive',
    publisher: {
      connect: {
        id: 1,
      },
    },
    description: '',
    releaseDate: new Date('2012/8/21 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Escape from Tarkov',
    publisher: {
      connect: {
        id: 13,
      },
    },
    description: '',
    releaseDate: new Date('2017/7/27 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Teamfight Tactics',
    publisher: {
      connect: {
        id: 2,
      },
    },
    description: '',
    releaseDate: new Date('2019/6/26 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'Hollow Knight',
    publisher: {
      connect: {
        id: 14,
      },
    },
    description: '',
    releaseDate: new Date('2017/2/24 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: 'DNF Duel',
    publisher: {
      connect: {
        id: 15,
      },
    },
    description: '',
    releaseDate: new Date('2022/6/28 00:00:00'),
  },
  {
    languageCode: 'JP',
    title: '遊戯王マスターデュエル',
    publisher: {
      connect: {
        id: 16,
      },
    },
    description: '',
    releaseDate: new Date('2022/1/27 00:00:00'),
  },
  // -------------------------------------------------------------------------
  // 20
  // -------------------------------------------------------------------------

  {
    languageCode: 'JP',
    title: '原神',
    publisher: {
      connect: {
        id: 17,
      },
    },
    description: '',
    releaseDate: new Date('2020/9/28 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: 'Path of Exile',
    publisher: {
      connect: {
        id: 18,
      },
    },
    description: '',
    releaseDate: new Date('2013/10/23 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: '黒い砂漠',
    publisher: {
      connect: {
        id: 19,
      },
    },
    description: '',
    releaseDate: new Date('2014/12/17 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: 'Overwatch',
    publisher: {
      connect: {
        id: 10,
      },
    },
    description: '',
    releaseDate: new Date('2016/5/24 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: "Tom Clancy's Rainbow Six Siege",
    publisher: {
      connect: {
        id: 20,
      },
    },
    description: '',
    releaseDate: new Date('2015/11/26 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: 'Destiny 2',
    publisher: {
      connect: {
        id: 21,
      },
    },
    description: '',
    releaseDate: new Date('2017/8/28 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: 'ファイナルファンタジーXIV',
    publisher: {
      connect: {
        id: 22,
      },
    },
    description: '',
    releaseDate: new Date('2010/9/30 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: 'Rocket League',
    publisher: {
      connect: {
        id: 23,
      },
    },
    description: '',
    releaseDate: new Date('2015/7/7 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: 'あつまれ どうぶつの森',
    publisher: {
      connect: {
        id: 24,
      },
    },
    description: '',
    releaseDate: new Date('2020/3/20 00:00:00'),
  },

  {
    languageCode: 'JP',
    title: 'ポケモンユナイト',
    publisher: {
      connect: {
        id: 24,
      },
    },
    description: '',
    releaseDate: new Date('2021/7/21 00:00:00'),
  },
];
