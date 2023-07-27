import { Router } from 'express';

import { createAdminSchema, createUserSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { createAdmin, createUser } from '@/controllers';

const usersRouter = Router();

usersRouter.post('/', validateBody(createUserSchema), createUser);
usersRouter.post('/admin', validateBody(createAdminSchema), createAdmin);

export { usersRouter };
