import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopularActivitivesComponent } from './home-popular-activitives.component';

describe('HomePopularActivitivesComponent', () => {
  let component: HomePopularActivitivesComponent;
  let fixture: ComponentFixture<HomePopularActivitivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePopularActivitivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePopularActivitivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
