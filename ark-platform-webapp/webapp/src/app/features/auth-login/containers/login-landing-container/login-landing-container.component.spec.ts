import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLandingContainerComponent } from './login-landing-container.component';

describe('LoginLandingContainerComponent', () => {
  let component: LoginLandingContainerComponent;
  let fixture: ComponentFixture<LoginLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
