import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [ProductCardComponent, ProductsListComponent, LogoutComponent],
  imports: [RouterModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports: [ProductCardComponent, ProductsListComponent, LogoutComponent],
})
export class SharedModule {}
