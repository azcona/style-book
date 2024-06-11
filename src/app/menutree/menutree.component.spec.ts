import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutreeComponent } from './menutree.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {TreeChecklist} from "./tree/tree.component";
import {MenuComponent} from "./menu/menu.component";
import {ButtonComponent} from "../button/button.component";
import {DialogComponent} from "./dialog/dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

describe('MenutreeComponent', () => {
  let component: MenutreeComponent;
  let fixture: ComponentFixture<MenutreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MenutreeComponent,
        MenuComponent,
        ButtonComponent,
        DialogComponent
      ],
      imports: [
        TreeChecklist,
        MatTreeModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatButtonModule,
        MatCheckboxModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
