import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRepartidorComponent } from './inicio-repartidor.component';

describe('InicioRepartidorComponent', () => {
  let component: InicioRepartidorComponent;
  let fixture: ComponentFixture<InicioRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
