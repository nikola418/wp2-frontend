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
      img: 'https://www.w3schools.com/images/w3schools_green.jpg',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 2,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1675009118/uploads/cbnk4la14dbr9o4vpamc.png',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 3,
      title: 'asdf',
      img: 'https://i.insider.com/601c27acee136f00183aa4f5?width=750&format=jpeg&auto=webp',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 4,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1675009118/uploads/cbnk4la14dbr9o4vpamc.png',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 5,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1675009118/uploads/cbnk4la14dbr9o4vpamc.png',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 6,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1675009118/uploads/cbnk4la14dbr9o4vpamc.png',
      prices: [220],
      desc: 'asdfafd',
    },
    {
      id: 7,
      title: 'asdf',
      img: 'https://res.cloudinary.com/dv2i8zgqy/image/upload/v1675009118/uploads/cbnk4la14dbr9o4vpamc.png',
      prices: [220],
      desc: 'asdfafd',
    },
  ];
}
