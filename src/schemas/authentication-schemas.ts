import { SignInParams, SignInParamsManager } from '@/services';
import Joi from 'joi';

export const signInSchema = Joi.object<SignInParams>({
  number: Joi.string().min(8).required(),
});

export const signInManagerSchema = Joi.object<SignInParamsManager>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})