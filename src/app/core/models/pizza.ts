import { IExtra } from './extra';

export interface IPizza {
  id: string;
  title: string;
  desc: string;
  img?: string;
  sizes: {
    dimension: { name: string; value: number };
    price: number;
  }[];
  extraOptions: IExtra[];
}
