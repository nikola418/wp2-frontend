import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/core/models/pizza';
import { PizzaService } from 'src/app/core/services/pizza/pizza.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  pizzas: IPizza[] = [];
  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getAll().subscribe((res) => (this.pizzas = res));
  }
}
