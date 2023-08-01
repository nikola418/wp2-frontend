import { NgModule } from '@angular/core';
import { ProductPageComponent } from './pages/product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ProductRoutingModule, SharedModule],
  declarations: [ProductPageComponent, ProductsPageComponent],
})
export class ProductsModule {}
