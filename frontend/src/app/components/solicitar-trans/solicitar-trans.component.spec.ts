import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarTransComponent } from './solicitar-trans.component';

describe('SolicitarTransComponent', () => {
  let component: SolicitarTransComponent;
  let fixture: ComponentFixture<SolicitarTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
