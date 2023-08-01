import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPizza } from 'src/app/core/models/pizza';
import { PizzasService } from 'src/app/core/services/pizzas/pizzas.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductPageComponent implements OnInit {
  pizza: IPizza | undefined;
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private pizzasService: PizzasService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.pizzasService
      .getOne(this.id as string)
      .subscribe((res) => (this.pizza = res));
  }
}
