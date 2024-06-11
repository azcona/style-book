import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRadioComponent } from './checkbox-radio.component';
import {CheckboxComponent} from "../checkbox/checkbox.component";
import {RadioComponent} from "../radio/radio.component";
import {SlideToggleComponent} from "../slide-toggle/slide-toggle.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

describe('CheckboxRadioComponent', () => {
  let component: CheckboxRadioComponent;
  let fixture: ComponentFixture<CheckboxRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CheckboxRadioComponent,
        CheckboxComponent,
        RadioComponent,
        SlideToggleComponent
      ],
      imports: [
        MatCheckboxModule,
        FormsModule,
        MatRadioModule,
        MatSlideToggleModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
