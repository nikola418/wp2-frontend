import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductCardComponent, ProductsListComponent],
  imports: [RouterModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports: [ProductCardComponent, ProductsListComponent],
})
export class SharedModule {
  constructor(private router: Router) {}
}
