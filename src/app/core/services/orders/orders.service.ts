import { Injectable } from '@angular/core';
import { IOrder } from '../../models/order';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TFilterParms } from '../../utils/filter-params/filter-params.type';
import { PaymentMethod } from '../../enums/payment-method';
import { OrderStatus } from '../../enums/order-status';

export type TCreateOrder = {
  address: string;
  total: number;
  paymentMethod: PaymentMethod;
  entries: {
    pizza: string;
    count: number;
    dimension: { name: string; value: number };
    extras: string[];
  }[];
};

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private readonly apiUrl = `${environment.apiUrl}/orders`;

  constructor(private httpClient: HttpClient) {}

  create(dto: TCreateOrder) {
    return this.httpClient.post(`${this.apiUrl}`, dto);
  }

  getAll(filters: TFilterParms = { skip: 0, take: 10, sortOrder: 'desc' }) {
    const { skip, take, sortOrder } = filters;
    return this.httpClient.get<IOrder[]>(
      `${this.apiUrl}?skip=${skip}&take=${take}&sortOrder=${sortOrder}`,
    );
  }

  updateById(
    id: string,
    dto: Partial<{
      status: number;
    }>,
  ) {
    return this.httpClient.patch(`${this.apiUrl}/${id}`, dto);
  }
}
