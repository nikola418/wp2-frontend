import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  isOpen = false;

  file?: File;
  title?: string;
  desc?: string;
  prices = {
    small: undefined,
    medium: undefined,
    large: undefined,
    extraLarge: undefined,
  };
  extraOptions: { text: string; price: number }[] = [];

  setIsOpen() {
    this.isOpen = !this.isOpen;
  }
  setFile(event: any) {
    this.file = event.target.files[0];
  }

  handleExtras() {
    return;
  }
}
