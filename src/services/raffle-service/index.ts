import { prisma } from '@/config';
import { Raffle } from '@prisma/client';
import raffleRepository from '@/repositories/raffle-repository'
import userRepository from '@/repositories/user-repository';
import { unauthorizedError } from '@/errors';





export const createRaffle =  async ({title, description, type, userId, maxTicket}: RaffleCreate) =>{

    const user = await userRepository.verifyUserManager(userId);

    if(!user) throw unauthorizedError();

    const raffle = await raffleRepository.createRaffle({title, description, type, userId, maxTicket})
    console.log(raffle);
    
    return raffle;

}

export const findRaffle = async (raffleId:number) => {

    const raffle = await raffleRepository.findRaffle(raffleId);

    return raffle;

}

export const findAllRaffle = async () => {

    const raffle = await raffleRepository.findAllRaffle();

    return raffle;

}


export type RaffleCreate = Omit<Raffle, 'id' | 'createdAt' | 'updatedAt' | 'open'>