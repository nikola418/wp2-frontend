import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [AdminPageComponent],
})
export class AdminModule {}
