import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPizza } from 'src/app/core/models/pizza';
import { PizzaService } from 'src/app/core/services/pizza/pizza.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductPageComponent implements OnInit {
  pizza: IPizza = {
    desc: '',
    title: '',
    extras: [],
    id: '',
    sizes: [],
    img: '',
  };
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
  ) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.pizzaService
      .getOne(this.id as string)
      .subscribe((res) => (this.pizza = res));
  }
}
