import { prisma } from '@/config';
import { notFoundError } from '@/errors';
import { RaffleCreate } from '@/services/raffle-service';

async function createRaffle(raffleData: RaffleCreate) {
  const raffle = await prisma.raffle.create({
    data:raffleData,
  });

  return raffle
}

async function findRaffle(raffleId:number) {

  const raffle = await prisma.raffle.findFirst({
    where:{id:raffleId},
    include:{
      ticket:true,
    }
  })
  
  if(!raffle) throw notFoundError();

  return raffle;

}

async function findAllRaffle() {

  const raffle = await prisma.raffle.findMany({
    include:{
      ticket:true,
    }
  })
  
  if(!raffle) notFoundError

  return raffle;

}



const raffleRepository = {
  createRaffle,
  findAllRaffle,
  findRaffle,
};

export default raffleRepository;
