import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVendedorComponent } from './inicio-vendedor.component';

describe('InicioVendedorComponent', () => {
  let component: InicioVendedorComponent;
  let fixture: ComponentFixture<InicioVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
