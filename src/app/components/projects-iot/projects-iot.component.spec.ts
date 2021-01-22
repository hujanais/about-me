import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsIotComponent } from './projects-iot.component';

describe('ProjectsIotComponent', () => {
  let component: ProjectsIotComponent;
  let fixture: ComponentFixture<ProjectsIotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsIotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
