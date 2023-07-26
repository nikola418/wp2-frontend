import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ProductsModule } from './features/products/products.module';
import { AuthModule } from './features/auth/auth.module';
import { HomeModule } from './features/home/home.module';
import { CartModule } from './features/cart/cart.module';
import { AdminModule } from './features/admin/admin.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => HomeModule },
      {
        path: 'cart',
        loadChildren: () => CartModule,
      },
      { path: 'auth', loadChildren: () => AuthModule },
      { path: 'admin', loadChildren: () => AdminModule },
      { path: 'products', loadChildren: () => ProductsModule },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
