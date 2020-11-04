import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionInventarioComponent } from './actualizacion-inventario.component';

describe('ActualizacionInventarioComponent', () => {
  let component: ActualizacionInventarioComponent;
  let fixture: ComponentFixture<ActualizacionInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizacionInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizacionInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
