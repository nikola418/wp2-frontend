import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardPageComponent } from './pages/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/ng';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CloudinaryModule,
    SharedModule,
  ],
  declarations: [AdminDashboardPageComponent, AddProductComponent],
})
export class AdminModule {}
