import { IExtra } from './extra';
import { IPizza } from './pizza';

export interface ICart {
  products: ICartProduct[];
  total: number;
  quantity: number;
}

export interface ICartProduct {
  pizza: IPizza;
  price: number;
  count: number;
  total: number;
  dimension: { name: string; value: number };
  extras: IExtra[];
}
