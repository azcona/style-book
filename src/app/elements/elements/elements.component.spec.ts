import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsComponent } from './elements.component';
import {AvatarComponent} from "../avatar/avatar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ButtonsGroupComponent} from "../buttons-group/buttons-group.component";
import {ScrollBarComponent} from "../scroll-bar/scroll-bar.component";
import {BuildingBlockComponent} from "../building-block/building-block.component";
import {HeaderTextComponent} from "../header-text/header-text.component";
import {HeaderImageComponent} from "../header-image/header-image.component";
import {ImagesComponent} from "../images/images.component";
import {DividerComponent} from "../divider/divider.component";
import {LinkComponent} from "../link/link.component";

describe('ElementsComponent', () => {
  let component: ElementsComponent;
  let fixture: ComponentFixture<ElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ElementsComponent,
        AvatarComponent,
        ButtonsGroupComponent,
        ScrollBarComponent,
        BuildingBlockComponent,
        HeaderTextComponent,
        HeaderImageComponent,
        ImagesComponent,
        DividerComponent,
        LinkComponent,
      ],
      imports: [
        MatIconModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
