import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule],
  declarations: [ProfilePageComponent],
})
export class ProfileModule {}
