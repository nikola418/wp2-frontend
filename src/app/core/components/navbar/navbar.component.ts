import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartCount } from '../../selectors/cart';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartCount$: Observable<number>;
  isBurgerOpen = false;
  isAdmin = false;
  containerStyles = '';

  constructor(
    private store: Store,
    private authService: AuthService,
  ) {
    this.cartCount$ = this.store.select(selectCartCount);
  }

  async ngOnInit() {
    this.isAdmin = await this.authService.isAdmin();
  }

  handleBurgerClick() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }
}
