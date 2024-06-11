import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderTextComponent } from './header-text.component';
import {MatIconModule} from "@angular/material/icon";
import {ButtonsGroupComponent} from "../buttons-group/buttons-group.component";
import {MatButtonModule} from "@angular/material/button";

describe('HeaderTextComponent', () => {
  let component: HeaderTextComponent;
  let fixture: ComponentFixture<HeaderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderTextComponent,
        ButtonsGroupComponent
      ],
      imports: [
        MatIconModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
