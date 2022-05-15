import { PrismaClient } from '@prisma/client_tag';
import { tagData, tagCategoryData, gameTagData } from './data';

const prisma = new PrismaClient();

const tagCategoriesTransfer = async () => {
  const tagCategories = [];
  for (const t of tagCategoryData) {
    const tagCategory = prisma.tagCategory.create({
      data: t,
    });
    tagCategories.push(tagCategory);
  }
  return await prisma.$transaction(tagCategories);
};

const tagsTransfer = async () => {
  const tags = [];
  for (const t of tagData) {
    const tag = prisma.tag.create({
      data: t,
    });
    tags.push(tag);
  }
  return await prisma.$transaction(tags);
};

const gameTagsTransfer = async () => {
  const gameTags = [];
  for (const g of gameTagData) {
    const gameTag = prisma.gameTag.create({
      data: g,
    });
    gameTags.push(gameTag);
  }
  return await prisma.$transaction(gameTags);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await tagCategoriesTransfer();
  await tagsTransfer();
  await gameTagsTransfer();

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
