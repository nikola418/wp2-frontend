import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './pages/signin/signin.component';
import { SignupPageComponent } from './pages/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInPageComponent, SignupPageComponent],
  providers: [AuthService],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
