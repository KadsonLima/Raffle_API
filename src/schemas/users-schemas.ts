import { CreateUserParams } from '@/services/users-service';
import Joi from 'joi';

export const createUserSchema = Joi.object<CreateUserParams>({
  name: Joi.string().required(),
  number: Joi.string().min(8).required(),
});
