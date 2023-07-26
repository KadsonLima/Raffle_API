import { ApplicationError } from '@/protocols';

export function invalidCredentialsError(): ApplicationError {
  return {
    name: 'InvalidCredentialsError',
    message: 'Number not register',
  };
}


export function invalidCredentialsManagerError(): ApplicationError {
  return {
    name: 'InvalidCredentialsError',
    message: 'Email or password incorrect',
  };
}
