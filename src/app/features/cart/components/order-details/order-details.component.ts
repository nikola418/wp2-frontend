import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from 'src/app/core/enums/payment-method';
import { ICart } from 'src/app/core/models/cart';
import { IUser } from 'src/app/core/models/user';
import { selectCart } from 'src/app/core/selectors/cart';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  @Output() updateParent = new EventEmitter<boolean>();
  @Input()
  isOpen!: boolean;
  user$: Observable<IUser>;
  cart$: Observable<ICart>;
  name?: string;
  phoneNumber?: string;
  address?: string;

  constructor(
    private authService: AuthService,
    private ordersService: OrdersService,
    private store: Store,
  ) {
    this.user$ = this.authService.getMe().pipe((res) => {
      res.subscribe((user) => {
        this.address = user.address;
        this.phoneNumber = user.phoneNumber;
        this.name = user.name;
      });
      return res;
    });
    this.cart$ = this.store.select(selectCart);
  }

  handleIsOpen() {
    this.isOpen = !this.isOpen;
    this.updateParent.emit(this.isOpen);
  }

  handleName(e: any) {
    this.name = e.target.value;
  }

  handleNumber(e: any) {
    this.phoneNumber = e.target.value;
  }

  handleAddress(e: any) {
    this.address = e.target.value;
  }

  handleOrder() {
    this.cart$.subscribe((res: ICart) => {
      this.ordersService
        .create({
          address: this.address!,
          entries: res.products.map((product) => ({
            pizza: product.pizza.id!,
            count: product.count,
            dimension: product.dimension,
            extras: product.extras.map((extra) => extra.id),
          })),
          paymentMethod: PaymentMethod.CashUponDelivery,
          total: res.total,
        })
        .subscribe(
          (res) => {
            this.handleIsOpen();
          },
          (err) => {
            return;
          },
        );
    });
  }
}
