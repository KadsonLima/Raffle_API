import { createRaffle, findAllRaffle, findRaffle, singInManager, singInPost } from '@/controllers';
import { validateBody } from '@/middlewares';
import { raffleSchema } from '@/schemas';
import { Router } from 'express';

const raffleRouter = Router();
raffleRouter.get('/:raffleId', findRaffle);
raffleRouter.get('/', findAllRaffle);
raffleRouter.post('/', validateBody(raffleSchema), createRaffle);

export { raffleRouter };
