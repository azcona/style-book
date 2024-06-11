import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContentComponent } from './table-content.component';
import {ExpansionPanelComponent} from "./expansion-panel/expansion-panel.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TableComponent} from "./table/table.component";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('TableContentComponent', () => {
  let component: TableContentComponent;
  let fixture: ComponentFixture<TableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TableContentComponent,
        ExpansionPanelComponent,
        TableComponent
      ],
      imports: [
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        NoopAnimationsModule,
        MatTableModule,
        MatCheckboxModule,
        MatButtonModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
