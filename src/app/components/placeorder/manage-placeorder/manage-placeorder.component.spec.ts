import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlaceorderComponent } from './manage-placeorder.component';

describe('ManagePlaceorderComponent', () => {
  let component: ManagePlaceorderComponent;
  let fixture: ComponentFixture<ManagePlaceorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePlaceorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlaceorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
