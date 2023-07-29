import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.development';
import { cartReducer } from './core/reducers/cart';
import { userReducer } from './core/reducers/user';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,
    StoreModule.forRoot({ cart: cartReducer, user: userReducer }),
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule],
})
export class AppModule {}
