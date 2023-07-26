import { createRaffle, findRaffle, singInManager, singInPost } from '@/controllers';
import { validateBody } from '@/middlewares';
import { raffleSchema, signInManagerSchema, signInSchema } from '@/schemas';
import { Router } from 'express';

const raffleRouter = Router();

raffleRouter.get('/:raffleId', findRaffle);
raffleRouter.post('/', validateBody(raffleSchema), createRaffle);

export { raffleRouter };
