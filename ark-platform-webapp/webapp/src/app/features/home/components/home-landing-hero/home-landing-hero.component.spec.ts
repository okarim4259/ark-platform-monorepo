import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingHeroComponent } from './home-landing-hero.component';

describe('HomeLandingHeroComponent', () => {
  let component: HomeLandingHeroComponent;
  let fixture: ComponentFixture<HomeLandingHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLandingHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
