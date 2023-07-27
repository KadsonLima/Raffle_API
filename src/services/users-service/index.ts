import { cannotEnrollBeforeStartDateError } from '@/errors';
import userRepository from '@/repositories/user-repository';
import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { duplicatedNumberError } from './errors';

async function createUser({ number, name}: CreateUserParams): Promise<User> {

  await validateUniqueNumberOrFail(number);

  return userRepository.create({
    name,
    number
  });
}

async function createAdmin({ number, name, email, password}: CreateAdminParams): Promise<User> {

  await validateUniqueNumberOrFail(number);

  const hashedPassword = await bcrypt.hash(password, 12);

  return await userRepository.createAdmin({
    number,
    name,
    email,
    password: hashedPassword,
  });

}




async function validateUniqueNumberOrFail(number: string) {

  const userWithSameNumber = await userRepository.findByNumber(number);

  if (userWithSameNumber) {
    throw duplicatedNumberError();
  }
}


export type CreateUserParams = Pick<User, 'number' | 'name'>;
export type CreateAdminParams = Omit<User, 'id' | 'createdAt' | 'manager'>;

const userService = {
  createUser,
  createAdmin,
};

export * from './errors';
export default userService;
