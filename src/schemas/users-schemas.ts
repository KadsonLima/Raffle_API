import { CreateAdminParams, CreateUserParams } from '@/services/users-service';
import Joi from 'joi';

export const createUserSchema = Joi.object<CreateUserParams>({
  name: Joi.string().required(),
  number: Joi.string().min(8).required(),
});

export const createAdminSchema = Joi.object<CreateAdminParams>({
  name: Joi.string().required(),
  number: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
