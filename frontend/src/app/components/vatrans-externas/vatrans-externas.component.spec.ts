import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VATransExternasComponent } from './vatrans-externas.component';

describe('VATransExternasComponent', () => {
  let component: VATransExternasComponent;
  let fixture: ComponentFixture<VATransExternasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VATransExternasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VATransExternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
