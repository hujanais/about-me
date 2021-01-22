import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Esp8622Component } from './esp8622.component';

describe('Esp8622Component', () => {
  let component: Esp8622Component;
  let fixture: ComponentFixture<Esp8622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Esp8622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Esp8622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
