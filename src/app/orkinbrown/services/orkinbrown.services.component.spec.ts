import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkinBrownServicesComponent } from './orkinbrown.services.component';

describe('ServicesComponent', () => {
  let component: OrkinBrownServicesComponent;
  let fixture: ComponentFixture<OrkinBrownServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrkinBrownServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrkinBrownServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
