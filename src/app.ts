import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

import { handleApplicationErrors } from '@/middlewares';
import { usersRouter, authenticationRouter } from '@/routers';
import { createServer } from 'http';
import { raffleRouter } from './routers/raffles-router';

const app = express();



app
  .use(cors({ origin: '*' }))
  .use(express.json())
  .use('/users', usersRouter)
  .use('/raffle', raffleRouter)
  .use('/auth', authenticationRouter)
  .use(handleApplicationErrors);


export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}


export async function close(): Promise<void> {
  await disconnectDB();
}

export const server = createServer(app);




