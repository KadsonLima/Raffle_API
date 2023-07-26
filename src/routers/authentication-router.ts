import { singInManager, singInPost } from '@/controllers';
import { validateBody } from '@/middlewares';
import { signInManagerSchema, signInSchema } from '@/schemas';
import { Router } from 'express';

const authenticationRouter = Router();

authenticationRouter.post('/sign-in', validateBody(signInSchema), singInPost);
authenticationRouter.post('/admin', validateBody(signInManagerSchema), singInManager);

export { authenticationRouter };
