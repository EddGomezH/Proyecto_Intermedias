import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesVentaComponent } from './ordenes-venta.component';

describe('OrdenesVentaComponent', () => {
  let component: OrdenesVentaComponent;
  let fixture: ComponentFixture<OrdenesVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
