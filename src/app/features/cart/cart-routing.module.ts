import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
