import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product/product.component';
import { ProductsPageComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductsPageComponent },
      { path: ':id', component: ProductPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProudctRoutingModule {}
