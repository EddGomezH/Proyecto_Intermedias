import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoActProducComponent } from './dialogo-act-produc.component';

describe('DialogoActProducComponent', () => {
  let component: DialogoActProducComponent;
  let fixture: ComponentFixture<DialogoActProducComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoActProducComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoActProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
