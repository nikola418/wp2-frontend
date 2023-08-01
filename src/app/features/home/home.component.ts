import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/core/models/pizza';
import { PizzasService } from 'src/app/core/services/pizzas/pizzas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements OnInit {
  pizzas: IPizza[] = [];
  constructor(private pizzasService: PizzasService) {}

  ngOnInit(): void {
    this.pizzasService.getAll().subscribe((res) => {
      this.pizzas = res;
    });
  }
}
