import { cannotEnrollBeforeStartDateError } from '@/errors';
import userRepository from '@/repositories/user-repository';
import { User } from '@prisma/client';
import { duplicatedNumberError } from './errors';

export async function createUser({ number, name}: CreateUserParams): Promise<User> {

  await validateUniqueNumberOrFail(number);

  return userRepository.create({
    name,
    number
  });
}



async function validateUniqueNumberOrFail(number: string) {

  const userWithSameNumber = await userRepository.findByNumber(number);

  if (userWithSameNumber) {
    throw duplicatedNumberError();
  }
}


export type CreateUserParams = Pick<User, 'number' | 'name'>;

const userService = {
  createUser,
};

export * from './errors';
export default userService;
