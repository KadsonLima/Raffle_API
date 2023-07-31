import { prisma } from '@/config';
import raffleRepository from '../raffle-repository';
import { conflictTicketError } from '@/errors/ticket-conflict-error copy';

async function verifyTicket(userId: number) {
  return prisma.ticket.findFirst({

  });
}

async function buyTicket(bodyTicket:BodyTicketBuy){
  const { raffleId , userId, tickets} = bodyTicket;

  const raffle = await raffleRepository.findRaffle(raffleId);
  console.log(raffle)

  return raffle

}


type BodyTicketBuy = {
  raffleId: number
  tickets:Number[]
  userId:Number
}

export const ticketRepository = {
  verifyTicket,
  buyTicket,

};
