import { Component } from '@angular/core';
import { IOrder } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { PizzasService } from 'src/app/core/services/pizzas/pizzas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class AdminDashboardPageComponent {
  refresh = false;
  pizzas;
  orders;

  constructor(
    private pizzasService: PizzasService,
    private ordersService: OrdersService,
  ) {
    this.pizzas = this.pizzasService.getAll();
    this.orders = this.ordersService.getAll();
  }

  handleDelete(e: any, id: string) {
    this.pizzasService
      .delete(id)
      .subscribe((res) => (this.pizzas = this.pizzasService.getAll()));
  }

  handleEdit(e: any, id: string) {
    return;
  }

  handleRefresh(e: any) {
    this.pizzas = this.pizzasService.getAll();
  }

  nextStage(order: IOrder) {
    this.ordersService
      .updateById(order.id, {
        status:
          order.status.value < 4 ? order.status.value + 1 : order.status.value,
      })
      .subscribe(() => (this.orders = this.ordersService.getAll()));
  }

  statusClass(order: IOrder, index: number) {
    if (index === 4) if (index - order.status.value === 0) return 'done';

    if (index - order.status.value < 0) return 'done';
    if (index - order.status.value === 0) return 'inProgress';
    if (index - order.status.value > 0) return 'undone';
    return null;
  }
}
