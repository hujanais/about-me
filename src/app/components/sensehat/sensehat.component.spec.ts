import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensehatComponent } from './sensehat.component';

describe('SensehatComponent', () => {
  let component: SensehatComponent;
  let fixture: ComponentFixture<SensehatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensehatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensehatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
