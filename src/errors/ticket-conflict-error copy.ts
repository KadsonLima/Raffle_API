import { ApplicationError } from '@/protocols';

export function conflictTicketError(): ApplicationError {
  return {
    name: 'ConflictError',
    message: 'Ticket not available',
  };
}
