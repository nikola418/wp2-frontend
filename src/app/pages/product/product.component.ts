import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: {
    img?: string;
    id?: string;
    sizes?: { dimension: { value: number; name: string }; price: number }[];
    extras?: { text: string; price: number }[];
  } = {
    img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1675009118/uploads/cbnk4la14dbr9o4vpamc.png',
    sizes: [
      { dimension: { value: 1, name: 'small' }, price: 390.0 },
      { dimension: { value: 2, name: 'medium' }, price: 620.0 },
    ],
    extras: [
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
      {
        text: 'mayonaiyz',
        price: 2.0,
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product.id = this.route.snapshot.paramMap.get('id') ?? undefined;
  }
}
