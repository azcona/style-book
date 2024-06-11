import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {MatListModule} from "@angular/material/list";
import {ImagesComponent} from "../elements/images/images.component";
import {AvatarComponent} from "../elements/avatar/avatar.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SlideToggleComponent} from "../checkbox-radio/slide-toggle/slide-toggle.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {CheckboxComponent} from "../checkbox-radio/checkbox/checkbox.component";
import {RadioComponent} from "../checkbox-radio/radio/radio.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {DividerComponent} from "../elements/divider/divider.component";
import {ButtonComponent} from "../button/button.component";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        ImagesComponent,
        AvatarComponent,
        SlideToggleComponent,
        CheckboxComponent,
        RadioComponent,
        DividerComponent,
        ButtonComponent,
        ImagesComponent
      ],
      imports: [
        MatListModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        FormsModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
