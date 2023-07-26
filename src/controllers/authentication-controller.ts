import authenticationService, { SignInParams, SignInParamsManager } from '@/services/authentication-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function singInPost(req: Request, res: Response) {
  const { number } = req.body as SignInParams;

  const result = await authenticationService.signIn({ number });
  

  res.status(httpStatus.OK).send(result);
}


export async function singInManager(req: Request, res: Response) {
  const { email, password } = req.body as SignInParamsManager;

  const result = await authenticationService.signInManager({ email, password });
  

  res.status(httpStatus.OK).send(result);
}