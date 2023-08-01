import { Component } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { PizzasService } from 'src/app/core/services/pizzas/pizzas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class AdminDashboardPageComponent {
  pizzas;
  orders;
  constructor(
    private pizzasService: PizzasService,
    private ordersService: OrdersService,
  ) {
    this.pizzas = this.pizzasService.getAll();
    this.orders = this.ordersService.getAll();
  }
}
