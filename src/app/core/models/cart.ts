import { IPizza } from './pizza';

export interface ICart {
  products: IPizza[];
  total: number;
  quantity: number;
}
