import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalGrideComponent } from './horizontal-gride.component';

describe('HorizontalGrideComponent', () => {
  let component: HorizontalGrideComponent;
  let fixture: ComponentFixture<HorizontalGrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalGrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalGrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
