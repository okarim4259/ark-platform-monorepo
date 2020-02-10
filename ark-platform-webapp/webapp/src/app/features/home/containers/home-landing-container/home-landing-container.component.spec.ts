import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingContainerComponent } from './home-landing-container.component';

describe('HomeLandingContainerComponent', () => {
  let component: HomeLandingContainerComponent;
  let fixture: ComponentFixture<HomeLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
