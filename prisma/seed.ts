import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Sql } from '@prisma/client/runtime';
const prisma = new PrismaClient();

async function main() {

  let user = await prisma.user.findFirst({where:{email:'kadson@gmail.com'}});

  const hashedPassword = await bcrypt.hash('32050832', "top_secret");

  if (!user) {
    user = await prisma.user.create({
      data: {
        name: 'kadson',
        number: '84996443438',
        password: hashedPassword,
        email: 'kadson@gmail.com',
      },
    });

  }
  
}

deleteAllData();
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function deleteAllData() {
  try {
  
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();
    console.log('Todos os dados foram excluídos com sucesso!');
  } catch (err) {
    console.error('Erro ao excluir os dados:', err);
  }
}