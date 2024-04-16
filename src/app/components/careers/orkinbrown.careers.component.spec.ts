import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkinBrownCareersComponent } from './orkinbrown.careers.component';

describe('JobsComponent', () => {
  let component: OrkinBrownCareersComponent;
  let fixture: ComponentFixture<OrkinBrownCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrkinBrownCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrkinBrownCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
