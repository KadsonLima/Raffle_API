import { CreateUserParams } from '@/services/users-service';
import Joi from 'joi';

export const raffleSchema = Joi.object({
  title: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
  type: Joi.string().required(),
  maxTicket: Joi.number().required(),

  headers: Joi.object({
    authorization: Joi.string().required()
  }).options({ allowUnknown: true })
});


raffleSchema
