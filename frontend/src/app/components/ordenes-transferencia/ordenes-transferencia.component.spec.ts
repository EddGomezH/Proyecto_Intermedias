import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesTransferenciaComponent } from './ordenes-transferencia.component';

describe('OrdenesTransferenciaComponent', () => {
  let component: OrdenesTransferenciaComponent;
  let fixture: ComponentFixture<OrdenesTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
