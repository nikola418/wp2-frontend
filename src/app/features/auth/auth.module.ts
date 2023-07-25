import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './pages/signin/signin.component';
import { SignupPageComponent } from './pages/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SignInPageComponent, SignupPageComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
