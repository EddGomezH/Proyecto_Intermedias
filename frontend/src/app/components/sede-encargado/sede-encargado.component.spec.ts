import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeEncargadoComponent } from './sede-encargado.component';

describe('SedeEncargadoComponent', () => {
  let component: SedeEncargadoComponent;
  let fixture: ComponentFixture<SedeEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedeEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
