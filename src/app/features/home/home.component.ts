import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/core/models/pizza';
import { PizzaService } from 'src/app/core/services/pizza/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements OnInit {
  pizzas: IPizza[] = [];
  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getAll().subscribe((res) => {
      this.pizzas = res;
    });
  }
}
