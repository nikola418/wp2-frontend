import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomePageComponent, FeaturedComponent],
  exports: [HomePageComponent],
})
export class HomeModule {}
