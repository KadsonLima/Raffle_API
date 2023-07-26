import sessionRepository from '@/repositories/session-repository';
import userRepository from '@/repositories/user-repository';
import { Prisma, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { invalidCredentialsError, invalidCredentialsManagerError } from './errors';
import {prisma} from '@/config'

async function signIn(params: SignInParams){
  const { number } = params;

  const user = await getUserOrFail(number);

  const token = await createSession(user.id);

  return {
    user: user,
    token,
  };
}

async function getUserOrFail(number: string): Promise<GetUserOrFailResult> {

  const user = await userRepository.findByNumber(number);

  if (!user) throw invalidCredentialsError();


  return user;
}



export async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function signInManager(params: SignInParamsManager){
  const { email, password } = params;

  const user = await prisma.user.findFirst({where:{email}})
console.log(user);
  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  delete user.password;

  return {
    user: user,
    token,
  };
}



async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsManagerError();
}

export type SignInParams = Pick<User, 'number'>;
export type SignInParamsManager = Pick<User, 'password' | 'email'>;



type GetUserOrFailResult = {
  id:number,
  name:string,
  number:string,
};

const authenticationService = {
  signIn, signInManager
};

export default authenticationService;
export * from './errors';
