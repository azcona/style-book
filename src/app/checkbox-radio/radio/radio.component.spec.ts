import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioComponent } from './radio.component';
import {MatRadioModule} from "@angular/material/radio";

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioComponent ],
      imports:[
        MatRadioModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
