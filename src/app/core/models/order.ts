import { IExtra } from './extra';
import { IPizza } from './pizza';
import { IUser } from './user';

export interface IOrder {
  id: string;
  customer: string & IUser;
  address: string;
  total: number;
  status: number & { name: string; value: number };
  paymentMethod: number & { name: string; value: number };
  entries: {
    pizza: IPizza;
    extras: IExtra[];
  }[];
}
