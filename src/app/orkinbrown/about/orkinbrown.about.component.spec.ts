import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkinBrownAboutComponent } from './orkinbrown.about.component';

describe('AboutComponent', () => {
  let component: OrkinBrownAboutComponent;
  let fixture: ComponentFixture<OrkinBrownAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrkinBrownAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrkinBrownAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
