import { prisma } from '@/config';
import { Raffle } from '@prisma/client';
import raffleRepository from '@/repositories/raffle-repository'
import userRepository from '@/repositories/user-repository';





export const createRaffle =  async ({title, description, type, userId, maxTicket}: RaffleCreate) =>{

    await userRepository.verifyUserManager(userId)

    const raffle = await raffleRepository.createRaffle({title, description, type, userId, maxTicket})

    return raffle;

}

export const findRaffle = async (raffleId:number) => {

    const raffle = await raffleRepository.findRaffle(raffleId);

    return raffle;

}




export type RaffleCreate = Omit<Raffle, 'id' | 'createdAt' | 'updatedAt' | 'open'>