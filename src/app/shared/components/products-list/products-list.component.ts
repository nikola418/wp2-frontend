import { Component } from '@angular/core';
import { IPizza } from 'src/app/core/models/pizza';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products: IPizza[] = [
    {
      id: 'asdf14sgdfvcs2341',
      title:
        'asdfaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690329391/download_l2bqgd.jpg',
      sizes: [
        {
          dimension: {
            name: 'Medium',
            value: 33,
          },
          price: 220,
        },
      ],
      desc: 'asdfafd',
      extraOptions: [{ text: 'asdf', price: 80 }],
    },
    {
      id: 'asdf14sgdfvcs2341',
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690329895/istockphoto-157741539-612x612_auon5e.jpg',
      sizes: [
        {
          dimension: {
            name: 'Medium',
            value: 33,
          },
          price: 220,
        },
      ],
      desc: 'asdfafd',
      extraOptions: [{ text: 'asdf', price: 80 }],
    },
    {
      id: 'asdf14sgdfvcs2341',
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690329315/istockphoto-1168754685-1024x1024_bref1e.jpg',
      sizes: [
        {
          dimension: {
            name: 'Medium',
            value: 33,
          },
          price: 220,
        },
      ],
      desc: 'asdfafd',
      extraOptions: [{ text: 'asdf', price: 80 }],
    },
    {
      id: 'asdf14sgdfvcs2341',
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690328898/istockphoto-1042948900-612x612_dxbprp.jpg',
      sizes: [
        {
          dimension: {
            name: 'Medium',
            value: 33,
          },
          price: 220,
        },
      ],
      desc: 'asdfafd',

      extraOptions: [{ text: 'asdf', price: 80 }],
    },
    {
      id: 'asdf14sgdfvcs2341',
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690328898/istockphoto-1042948900-612x612_dxbprp.jpg',
      sizes: [
        {
          dimension: {
            name: 'Medium',
            value: 33,
          },
          price: 220,
        },
      ],
      desc: 'asdfafd',

      extraOptions: [{ text: 'asdf', price: 80 }],
    },
    {
      id: 'asdf14sgdfvcs2341',
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690328898/istockphoto-1042948900-612x612_dxbprp.jpg',
      sizes: [
        {
          dimension: {
            name: 'Medium',
            value: 33,
          },
          price: 220,
        },
      ],
      desc: 'asdfafd',

      extraOptions: [{ text: 'asdf', price: 80 }],
    },
    {
      id: 'asdf14sgdfvcs2341',
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690328898/istockphoto-1042948900-612x612_dxbprp.jpg',
      sizes: [
        {
          dimension: {
            name: 'Medium',
            value: 33,
          },
          price: 220,
        },
      ],
      desc: 'asdfafd',

      extraOptions: [{ text: 'asdf', price: 80 }],
    },
  ];
}
