import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  @Output()
  info: {
    name: string;
    phoneNumber: string;
    address: string;
  } = { name: '', phoneNumber: '', address: '' };
}
