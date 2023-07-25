import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignInPageComponent } from './pages/signin/signin.component';
import { SignupPageComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signin',
      },
      { path: 'signin', component: SignInPageComponent },
      {
        path: 'signup',
        component: SignupPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
