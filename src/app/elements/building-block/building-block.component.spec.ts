import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingBlockComponent } from './building-block.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AvatarComponent} from "../avatar/avatar.component";

describe('BuildingBlockComponent', () => {
  let component: BuildingBlockComponent;
  let fixture: ComponentFixture<BuildingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BuildingBlockComponent,
        AvatarComponent
      ],
      imports: [
        MatIconModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
