import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardPageComponent } from './pages/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  declarations: [AdminDashboardPageComponent, AddProductComponent],
})
export class AdminModule {}
