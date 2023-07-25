import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: ':id', component: ProductsPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProudctsRoutingModule {}
