import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardPageComponent } from './pages/dashboard/dashboard.component';
import { canActivateAdmin } from 'src/app/core/guards/authorization.guard';
import { AuthService } from 'src/app/core/services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardPageComponent,
        canActivate: [canActivateAdmin],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AdminRoutingModule {}
