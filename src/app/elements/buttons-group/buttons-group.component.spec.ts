import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsGroupComponent } from './buttons-group.component';

import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

describe('ButtonsGroupComponent', () => {
  let component: ButtonsGroupComponent;
  let fixture: ComponentFixture<ButtonsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ButtonsGroupComponent
      ],
      imports: [
        MatIconModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
