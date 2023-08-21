import { Component, EventEmitter, Input, Output } from '@angular/core';
import axios from 'axios';
import { PizzaDimension } from 'src/app/core/enums/pizza-dimension';
import { IExtra } from 'src/app/core/models/extra';
import { IPizza } from 'src/app/core/models/pizza';
import { PizzasService } from 'src/app/core/services/pizzas/pizzas.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  @Input() updateStatus = false;
  @Output() updateParent = new EventEmitter<boolean>();
  isOpen = false;

  pizza: IPizza;
  extra: IExtra;
  file: File | null;

  constructor(private pizzaService: PizzasService) {
    this.extra = {} as IExtra;
    this.pizza = { desc: '', extras: [], sizes: [], title: '', img: '' };
    this.file = null;
  }

  setIsOpen() {
    this.extra = {} as IExtra;
    this.pizza = { desc: '', extras: [], sizes: [], title: '', img: '' };
    this.file = null;
    this.isOpen = !this.isOpen;
  }

  setFile(e: any) {
    this.file = e.target.files[0];
  }

  handleExtra(e: any) {
    this.extra = { ...this.extra, [e.target.name]: e.target.value };
  }

  handleExtras() {
    this.extra.text && this.extra.price && this.pizza.extras.push(this.extra);
  }

  setPrice(e: any, index: number) {
    this.pizza.sizes[index] = {
      dimension: {
        value: parseInt(Object.keys(PizzaDimension)[index]),
        name: Object.values(PizzaDimension)[index].toString(),
      },
      price: e.target.value,
    };
  }

  async handleCreate() {
    const data = new FormData();
    data.append('file', this.file!);
    data.append('upload_preset', 'uploads');
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/nikola418/image/upload',
        data,
      );
      const { url } = uploadRes.data;
      this.pizza.img = url;

      this.pizzaService.create(this.pizza).subscribe(
        (res) => {
          this.setIsOpen();
          this.updateParent.emit(true);
        },
        (err) => {
          this.setIsOpen();
          this.updateParent.emit(true);
        },
      );
    } catch (error) {
      return;
    }
  }
}
