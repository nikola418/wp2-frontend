import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/core/models/pizza';
import { PizzasService } from 'src/app/core/services/pizzas/pizzas.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  pizzas: IPizza[] = [];
  constructor(private pizzasService: PizzasService) {}

  ngOnInit(): void {
    this.pizzasService.getAll().subscribe((res) => (this.pizzas = res));
  }
}
