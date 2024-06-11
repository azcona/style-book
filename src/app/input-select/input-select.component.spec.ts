import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSelectComponent } from './input-select.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";

describe('InputSelectComponent', () => {
  let component: InputSelectComponent;
  let fixture: ComponentFixture<InputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InputSelectComponent,
        AutocompleteComponent,
      ],
      imports: [
        InputComponent,
        SelectComponent,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
