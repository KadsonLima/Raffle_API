import { ResponseWithIo } from '@/config/configSocket';
import { Request } from 'express';
import httpStatus from 'http-status';
import * as raffleService from '@/services/raffle-service'


export const createRaffle =  async (req: Request, res: ResponseWithIo) => {
  const { userId } = res.locals;
  const {title, description, type, maxTicket} = req.body;

  const raffle = await raffleService.createRaffle({title, description, type, userId, maxTicket});

  

  res.status(httpStatus.OK).send(raffle);
}

export const findRaffle = async (req: Request, res: ResponseWithIo) => {
  const { raffleId } = req.params;

  const raffle = await raffleService.findRaffle(Number(raffleId));

  

  res.status(httpStatus.OK).send(raffle);
}

export const findAllRaffle = async (req: Request, res: ResponseWithIo) => {

  const raffle = await raffleService.findAllRaffle();

  

  res.status(httpStatus.OK).send(raffle);
}