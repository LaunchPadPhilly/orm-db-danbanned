const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  console.log("Using DB:", process.env.DATABASE_URL);

  const result = await prisma.$queryRaw`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema='public';
  `;
  console.log("Tables in DB:", result);

  const projects = await prisma.project.findMany();
  console.log("Projects:", projects);
}

test()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
