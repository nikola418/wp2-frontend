import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  burgerOpen = false;
  containerStyles = '';

  handleBurgerClick() {
    this.burgerOpen = !this.burgerOpen;
  }
}
