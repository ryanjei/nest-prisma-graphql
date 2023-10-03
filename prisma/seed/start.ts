import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const postData: Prisma.PostCreateInput[] = [
  {
    title: '表題',
    content: '投稿内容',
  },
  {
    title: 'Hello!',
    content: 'I`m fine. Thank you.',
  },
  {
    title: 'DBどうしよう',
    content: '正直なんでもいいんじゃないかなって',
  },
  {
    title: '学習スタート',
    content: 'はじめてのNustJS',
  },
];

async function main() {
  console.log(`Start seeding ...`);

  await prisma.post.deleteMany();

  for (const p of postData) {
    const post = await prisma.post.create({
      data: p,
    });

    console.log(`Created post with id: ${post.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
