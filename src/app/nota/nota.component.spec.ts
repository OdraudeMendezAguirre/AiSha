import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaComponent } from './nota.component';

describe('NotaComponent', () => {
  let component: NotaComponent;
  let fixture: ComponentFixture<NotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
