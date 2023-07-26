import userService from '@/services/users-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function createUser(req: Request, res: Response) {
  const { number, name}:{number:string, name:string} = req.body;
  console.log("entrou")
  const user = await userService.createUser({ number , name});
  
  res.status(httpStatus.CREATED).json({
    id: user.id,
    name: user.name,
    email: user.number,
  });
}
