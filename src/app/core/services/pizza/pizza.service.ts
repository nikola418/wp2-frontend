import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { IPizza } from '../../models/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
  ) {}

  getAll(skip = 0, take = 12) {
    return this.httpClient.get(
      `${this.apiUrl}/pizzas?skip=${skip}&take=${take}`,
    );
  }

  getOfTheDay() {
    return this.httpClient.get(`${this.apiUrl}/pizzas/of-the-day`);
  }

  create(dto: IPizza) {
    if (!this.authService.isAdmin()) throw new Error('Unauthorized');
    return this.httpClient.post(`${this.apiUrl}/pizzas`, dto);
  }

  update(id: string, dto: Partial<IPizza>) {
    if (!this.authService.isAdmin()) throw new Error('Unauthorized');
    return this.httpClient.patch(`${this.apiUrl}/pizzas/${id}`, dto);
  }

  delete(id: string) {
    if (!this.authService.isAdmin()) throw new Error('Unauthorized');
    return this.httpClient.delete(`${this.apiUrl}/pizzas/${id}`);
  }
}
