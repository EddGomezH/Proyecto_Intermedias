import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoTransEComponent } from './dialogo-trans-e.component';

describe('DialogoTransEComponent', () => {
  let component: DialogoTransEComponent;
  let fixture: ComponentFixture<DialogoTransEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoTransEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoTransEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
