import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPizza } from 'src/app/core/models/pizza';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  pizza: IPizza = {
    desc: '',
    title: '',
    extras: [],
    id: '',
    sizes: [],
    img: '',
  };

  constructor(private store: Store) {}
}
