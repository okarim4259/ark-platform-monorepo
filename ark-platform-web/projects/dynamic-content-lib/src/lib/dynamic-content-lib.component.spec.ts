import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentLibComponent } from './dynamic-content-lib.component';

describe('DynamicContentLibComponent', () => {
  let component: DynamicContentLibComponent;
  let fixture: ComponentFixture<DynamicContentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
