import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkinBrownHomeComponent } from './orkinbrown.home.component';

describe('LandingComponent', () => {
  let component: OrkinBrownHomeComponent;
  let fixture: ComponentFixture<OrkinBrownHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrkinBrownHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrkinBrownHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
