import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLandingContainerComponent } from './dashboard-landing-container.component';

describe('DashboardLandingContainerComponent', () => {
  let component: DashboardLandingContainerComponent;
  let fixture: ComponentFixture<DashboardLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
