import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/core/models/order';
import { IUser } from 'src/app/core/models/user';
import { selectUser } from 'src/app/core/selectors/user';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfilePageComponent {
  user$: Observable<IUser | null>;
  orders$: Observable<IOrder[]>;

  constructor(
    private store: Store<IUser>,
    private ordersService: OrdersService,
  ) {
    this.user$ = this.store.select(selectUser);
    this.orders$ = this.ordersService.getAll();
  }

  statusClass(order: IOrder, index: number) {
    if (index === 4) if (index - order.status.value === 0) return 'done';

    if (index - order.status.value < 0) return 'done';
    if (index - order.status.value === 0) return 'inProgress';
    if (index - order.status.value > 0) return 'undone';
    return null;
  }
}
