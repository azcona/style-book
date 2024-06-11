import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardComponent} from './cardbox/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ButtonComponent} from './button/button.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {TypographyComponent} from './typography/typography.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {CheckboxRadioComponent} from './checkbox-radio/checkbox-radio/checkbox-radio.component';
import {CheckboxComponent} from './checkbox-radio/checkbox/checkbox.component';
import {RadioComponent} from './checkbox-radio/radio/radio.component';
import {SlideToggleComponent} from './checkbox-radio/slide-toggle/slide-toggle.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { ElementsComponent } from './elements/elements/elements.component';
import { AvatarComponent } from './elements/avatar/avatar.component';
import { ButtonsGroupComponent } from './elements/buttons-group/buttons-group.component';
import { BuildingBlockComponent } from './elements/building-block/building-block.component';
import { ScrollBarComponent } from './elements/scroll-bar/scroll-bar.component';
import { HeaderTextComponent } from './elements/header-text/header-text.component';
import { HeaderImageComponent } from './elements/header-image/header-image.component';
import { ImagesComponent } from './elements/images/images.component';
import { DividerComponent } from './elements/divider/divider.component';
import { LinkComponent } from './elements/link/link.component';
import { ListComponent } from './list/list.component';
import { MatListModule} from "@angular/material/list";
import { MenuComponent } from './menutree/menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import { BoxComponent } from './elements/box/box.component';
import { CardboxComponent } from './cardbox/cardbox.component';
import {MatTreeModule} from '@angular/material/tree';
import {CommonModule} from "@angular/common";
import { MenutreeComponent } from './menutree/menutree.component';
import {TreeChecklist} from "./menutree/tree/tree.component";
import { DialogComponent } from './menutree/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogContentComponent } from './menutree/dialog-content/dialog-content.component';
import {MatInputModule} from "@angular/material/input";
import { SelectComponent } from './input-select/select/select.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InputSelectComponent } from './input-select/input-select.component';
import {InputComponent} from "./input-select/input/input.component";
import { AutocompleteComponent } from './input-select/autocomplete/autocomplete.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { ExpansionPanelComponent } from './table-content/expansion-panel/expansion-panel.component';
import { TableContentComponent } from './table-content/table-content.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { MatTableModule} from "@angular/material/table";
import {TableComponent} from "./table-content/table/table.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    TypographyComponent,
    ToolbarComponent,
    CheckboxRadioComponent,
    CheckboxComponent,
    RadioComponent,
    SlideToggleComponent,
    ElementsComponent,
    AvatarComponent,
    ScrollBarComponent,
    ButtonsGroupComponent,
    BuildingBlockComponent,
    HeaderTextComponent,
    HeaderImageComponent,
    ImagesComponent,
    DividerComponent,
    LinkComponent,
    ListComponent,
    MenuComponent,
    BoxComponent,
    CardboxComponent,
    MenutreeComponent,
    DialogComponent,
    DialogContentComponent,
    CarouselComponent,
    InputSelectComponent,
    ExpansionPanelComponent,
    AutocompleteComponent,
    TableContentComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatListModule,
    MatMenuModule,
    MatTreeModule,
    ReactiveFormsModule,
    CommonModule,
    TreeChecklist,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    InputComponent,
    SelectComponent,
    MatAutocompleteModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
