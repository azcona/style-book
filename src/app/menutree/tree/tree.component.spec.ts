import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TreeChecklist } from './tree.component';
import {ButtonComponent} from "../../button/button.component";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

describe('TreeChecklist', () => {
  let component: TreeChecklist;
  let fixture: ComponentFixture<TreeChecklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ButtonComponent,
      ],
      imports: [
        TreeChecklist,
        MatTreeModule,
        MatCheckboxModule,
        MatTreeModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeChecklist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle item selection', () => {
    const item = {} as any;
    component.todoItemSelectionToggle(item);

    expect(component.checklistSelection.isSelected(item)).toBe(true);
  });
});
