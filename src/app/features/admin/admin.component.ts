import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminPageComponent {
  products = [
    {
      title: 'asdfsa',
      _id: '123sadsaf83',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690329895/istockphoto-157741539-612x612_auon5e.jpg',
      sizes: [{ dimension: { name: 'Small', value: 1 }, price: 23.0 }],
    },
  ];

  orders = [
    {
      _id: 'asdxzcv34112ffdsa',
      customer: 'juan',
      total: 230.0,
      paymentMethod: { name: 'Cash Upon Delivery', value: 1 },
      status: { value: 2, name: 'In Preparation' },
    },
  ];
}
