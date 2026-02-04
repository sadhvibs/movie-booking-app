import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSeatPopupComponent } from './select-seat-popup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'app/shared/shared.module';
import { MatDialogRef } from '@angular/material/dialog';

describe('SelectSeatPopupComponent', () => {
  let component: SelectSeatPopupComponent;
  let fixture: ComponentFixture<SelectSeatPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [SelectSeatPopupComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jasmine.createSpy('close')//mock close()
          }
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(SelectSeatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
