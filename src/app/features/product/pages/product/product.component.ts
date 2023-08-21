import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/core/actions/cart.actions';
import { PizzaDimension } from 'src/app/core/enums/pizza-dimension';
import { IExtra } from 'src/app/core/models/extra';
import { IPizza } from 'src/app/core/models/pizza';
import { PizzasService } from 'src/app/core/services/pizzas/pizzas.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductPageComponent {
  id: string | null;
  pizza: IPizza | undefined;
  price?: number = undefined;
  extras: IExtra[] = [];
  size: number = PizzaDimension.Small;
  count = 1;

  constructor(
    private route: ActivatedRoute,
    private pizzasService: PizzasService,
    private store: Store,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pizzasService.getOne(this.id as string).subscribe((res) => {
      this.pizza = res;
      this.price = res.sizes[0].price;
    });
  }

  handleSize({
    dimension: { value },
    price,
  }: {
    dimension: { value: number; name: string };
    price: number;
  }) {
    this.size = value;
    this.price = price;
  }

  handleCount(e: any) {
    this.count = e.target.value;
  }

  handleExtra(e: any, extra: IExtra) {
    const checked = e.target.checked;
    if (checked) {
      this.extras.push(extra);
    } else {
      this.extras = this.extras.filter((ex) => ex.id !== extra.id);
    }
  }

  handleAddToCart() {
    this.store.dispatch(
      addToCart({
        count: this.count,
        dimension: { value: this.size, name: PizzaDimension[this.size] },
        price: this.price as number,
        total: (this.price as number) * this.count,
        extras: this.extras,
        pizza: this.pizza as IPizza,
      }),
    );
  }
}
