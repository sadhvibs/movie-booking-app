import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSeatPopupComponent } from './select-seat-popup.component';

describe('SelectSeatPopupComponent', () => {
  let component: SelectSeatPopupComponent;
  let fixture: ComponentFixture<SelectSeatPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSeatPopupComponent]
    });
    fixture = TestBed.createComponent(SelectSeatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
