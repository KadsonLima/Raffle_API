import { prisma } from '@/config';
import { User } from '@prisma/client'

async function create(data: createUser) {

  return await prisma.user.create({
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

  return await prisma.user.findFirst({where:{id:userId, manager:true}}) 
  
}

async function createAdmin({name, password, email, number}: createAdmin) {

  return await prisma.user.create({
    data:{
      email,
      name,
      password,
      number,
      manager:true
    },
  });

}

type createUser = Pick<User, 'name' | 'number'>
type UserDefault = Omit<User, 'email' | 'password' | 'manager'>
type createAdmin = Omit<User, 'id'|'manager'| 'createdAt'>



const userRepository = {
  findByNumber,
  create,
  verifyUserManager,
  createAdmin
};

export default userRepository;
