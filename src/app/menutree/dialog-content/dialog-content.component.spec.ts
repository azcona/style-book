import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogContentComponent } from './dialog-content.component';
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {TreeChecklist} from "../tree/tree.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";

describe('DialogContentComponent', () => {
  let component: DialogContentComponent;
  let fixture: ComponentFixture<DialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DialogComponent,
        DialogContentComponent
      ],
      imports: [
        MatDialogModule,
        TreeChecklist,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
