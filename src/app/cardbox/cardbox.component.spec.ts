import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboxComponent } from './cardbox.component';
import {CardComponent} from "./card/card.component";
import {BoxComponent} from "../elements/box/box.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

describe('CardboxComponent', () => {
  let component: CardboxComponent;
  let fixture: ComponentFixture<CardboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardboxComponent,
        CardComponent,
        BoxComponent,
      ],
      imports: [
        MatCardModule,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
