import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  declarations: [ProfilePageComponent],
})
export class ProfileModule {}
