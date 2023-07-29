import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin.component';
import { canActivateAdmin } from 'src/app/core/guards/authorization.guard';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

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
  providers: [AuthorizationService],
})
export class AdminRoutingModule {}
