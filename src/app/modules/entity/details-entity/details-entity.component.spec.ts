import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEntityComponent } from './details-entity.component';

describe('DetailsEntityComponent', () => {
  let component: DetailsEntityComponent;
  let fixture: ComponentFixture<DetailsEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
