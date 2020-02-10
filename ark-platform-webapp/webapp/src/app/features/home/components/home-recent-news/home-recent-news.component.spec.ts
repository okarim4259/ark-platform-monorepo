import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecentNewsComponent } from './home-recent-news.component';

describe('HomeRecentNewsComponent', () => {
  let component: HomeRecentNewsComponent;
  let fixture: ComponentFixture<HomeRecentNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecentNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
