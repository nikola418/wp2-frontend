import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin.component';
import { canActivateAdmin } from 'src/app/core/guards/authorization.guard';
import { AuthService } from 'src/app/core/services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [canActivateAdmin],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AdminRoutingModule {}
