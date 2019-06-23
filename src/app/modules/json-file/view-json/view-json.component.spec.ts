import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJsonComponent } from './view-json.component';

describe('ViewJsonComponent', () => {
  let component: ViewJsonComponent;
  let fixture: ComponentFixture<ViewJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
