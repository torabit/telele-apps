import { PrismaClient } from '@prisma/client_game';
import { gameData, publisherData, gameIconData } from './data';

const prisma = new PrismaClient();

const deleteGame = async () => {
  return await prisma.game.deleteMany();
};

const deletePublisher = async () => {
  return await prisma.publisher.deleteMany();
};

const gamesTransfer = async () => {
  const games = [];
  for (const t of gameData) {
    const game = prisma.game.create({
      data: t,
    });
    games.push(game);
  }
  return await prisma.$transaction(games);
};

const gameIconsTransfer = async () => {
  const gameIcons = [];
  for (const i of gameIconData) {
    const gameIcon = prisma.gameIcon.create({
      data: i,
    });
    gameIcons.push(gameIcon);
  }
  return await prisma.$transaction(gameIcons);
};

const publishersTransfer = async () => {
  const publishers = [];
  for (const t of publisherData) {
    const publisher = prisma.publisher.create({
      data: t,
    });
    publishers.push(publisher);
  }
  return await prisma.$transaction(publishers);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await deleteGame();
  await deletePublisher();

  await publishersTransfer();
  await gamesTransfer();
  await gameIconsTransfer();

  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
