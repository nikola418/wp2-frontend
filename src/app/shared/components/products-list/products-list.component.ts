import { Component, Input } from '@angular/core';
import { IPizza } from 'src/app/core/models/pizza';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input()
  pizzas: IPizza[] = [];
}
