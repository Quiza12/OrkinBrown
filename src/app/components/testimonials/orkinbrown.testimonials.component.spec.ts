import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkinBrownTestimonialsComponent } from './orkinbrown.testimonials.component';

describe('TestimonialsComponent', () => {
  let component: OrkinBrownTestimonialsComponent;
  let fixture: ComponentFixture<OrkinBrownTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrkinBrownTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrkinBrownTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
