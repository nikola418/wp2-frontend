import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products = [
    {
      id: 1,
      title:
        'asdfaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690329391/download_l2bqgd.jpg',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 2,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690329895/istockphoto-157741539-612x612_auon5e.jpg',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 3,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690329315/istockphoto-1168754685-1024x1024_bref1e.jpg',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 4,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690328898/istockphoto-1042948900-612x612_dxbprp.jpg',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 5,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690328898/istockphoto-1042948900-612x612_dxbprp.jpg',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 6,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690328898/istockphoto-1042948900-612x612_dxbprp.jpg',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 7,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1690328898/istockphoto-1042948900-612x612_dxbprp.jpg',
      prices: [220],
      desc: 'asdfafd',
    },
  ];
}
