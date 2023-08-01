import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDasboardPageComponent } from './dashboard.component';

describe('AdminDasboardPageComponent', () => {
  let component: AdminDasboardPageComponent;
  let fixture: ComponentFixture<AdminDasboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDasboardPageComponent],
    });
    fixture = TestBed.createComponent(AdminDasboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
