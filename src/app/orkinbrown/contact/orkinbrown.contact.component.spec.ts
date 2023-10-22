import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkinBrownContactComponent } from './orkinbrown.contact.component';

describe('ContactComponent', () => {
  let component: OrkinBrownContactComponent;
  let fixture: ComponentFixture<OrkinBrownContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrkinBrownContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrkinBrownContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
