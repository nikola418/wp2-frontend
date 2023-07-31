import { NgModule } from '@angular/core';
import { ProductPageComponent } from './pages/product/product.component';
import { ProudctRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductPageComponent, ProductsPageComponent],
  imports: [CommonModule, ProudctRoutingModule, SharedModule],
})
export class ProductsModule {}
