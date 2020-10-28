import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarRolComponent } from './registar-rol.component';

describe('RegistarRolComponent', () => {
  let component: RegistarRolComponent;
  let fixture: ComponentFixture<RegistarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistarRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
