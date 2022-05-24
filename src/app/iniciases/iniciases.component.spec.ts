import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciasesComponent } from './iniciases.component';

describe('IniciasesComponent', () => {
  let component: IniciasesComponent;
  let fixture: ComponentFixture<IniciasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test inicio sesion',()=>{
    let result="";
    component.contrasena="aisha";
    component.correo="admin@Aisha.com.mx";
    result=component.iniciar();
    expect(result).toEqual("Inicio sesion correctamente");
  });
  it('Test inicio sesion erroneo',()=>{
    let result="";
    component.contrasena="paco";
    component.correo="admin@Aisha.com.mx";
    result=component.iniciar();
    expect(result).toEqual("Datos erroneos");
  })
  

});
