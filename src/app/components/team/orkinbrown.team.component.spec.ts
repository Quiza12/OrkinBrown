import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkinBrownTeamComponent } from './orkinbrown.team.component';

describe('TeamComponent', () => {
  let component: OrkinBrownTeamComponent;
  let fixture: ComponentFixture<OrkinBrownTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrkinBrownTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrkinBrownTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
