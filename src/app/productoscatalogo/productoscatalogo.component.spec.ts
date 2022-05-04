import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoscatalogoComponent } from './productoscatalogo.component';

describe('ProductoscatalogoComponent', () => {
  let component: ProductoscatalogoComponent;
  let fixture: ComponentFixture<ProductoscatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoscatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoscatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
