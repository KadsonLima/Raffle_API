import { prisma } from '@/config';
import { User } from '@prisma/client'
import { unauthorizedError } from '@/errors';

async function create(data: createUser) {

  return prisma.user.create({
    data,
  });

}

async function findByNumber(number: string):Promise<UserDefault> {
  const user = await prisma.user.findFirst({
    where: {number},
    select: {
      id: true,
      name:true,
      number:true,
      createdAt:true,
    }
  });

  return user
}

async function verifyUserManager(userId:number) {

  const user = await prisma.user.findFirst({where:{id:userId}})

  if(!user) unauthorizedError
  
}

type createUser = Pick<User, 'name' | 'number'>
type UserDefault = Omit<User, 'email' | 'password' | 'manager'>



const userRepository = {
  findByNumber,
  create,
  verifyUserManager,
};

export default userRepository;
