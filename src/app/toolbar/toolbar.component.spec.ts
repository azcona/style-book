import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ToolbarComponent} from './toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "../app-routing.module";
import {MatButtonModule} from "@angular/material/button";

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [
        MatToolbarModule,
        MatIconModule,
        AppRoutingModule,
        MatButtonModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
