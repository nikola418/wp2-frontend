import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'wp2-frontend';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getMe();
  }
}
