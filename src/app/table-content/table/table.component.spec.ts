import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TableComponent} from './table.component';
import { MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TableComponent,
      ],
      imports: [
        MatTableModule,
        MatCheckboxModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
