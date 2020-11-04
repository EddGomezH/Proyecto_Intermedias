import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTransInternasComponent } from './vtrans-internas.component';

describe('VTransInternasComponent', () => {
  let component: VTransInternasComponent;
  let fixture: ComponentFixture<VTransInternasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTransInternasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTransInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
