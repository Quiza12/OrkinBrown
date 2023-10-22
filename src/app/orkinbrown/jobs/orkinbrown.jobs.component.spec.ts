import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkinBrownJobsComponent } from './orkinbrown.jobs.component';

describe('JobsComponent', () => {
  let component: OrkinBrownJobsComponent;
  let fixture: ComponentFixture<OrkinBrownJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrkinBrownJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrkinBrownJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
