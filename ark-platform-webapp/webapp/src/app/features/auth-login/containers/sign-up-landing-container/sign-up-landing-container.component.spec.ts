import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpLandingContainerComponent } from './sign-up-landing-container.component';

describe('SignUpLandingContainerComponent', () => {
  let component: SignUpLandingContainerComponent;
  let fixture: ComponentFixture<SignUpLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
