import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageComponent],
    });
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
