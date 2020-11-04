import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBodegueroComponent } from './inicio-bodeguero.component';

describe('InicioBodegueroComponent', () => {
  let component: InicioBodegueroComponent;
  let fixture: ComponentFixture<InicioBodegueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioBodegueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
