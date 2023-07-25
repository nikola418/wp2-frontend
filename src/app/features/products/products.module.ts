import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './products.component';
import { ProudctsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [CommonModule, ProudctsRoutingModule],
})
export class ProductsModule {}
