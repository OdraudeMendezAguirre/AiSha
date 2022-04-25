import { TestBed } from '@angular/core/testing';

import { ProductoService } from './productos.service'

describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
})