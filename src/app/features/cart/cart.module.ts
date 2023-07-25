import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [CommonModule, CartRoutingModule],
  declarations: [CartPageComponent, OrderDetailsComponent],
})
export class CartModule {}
