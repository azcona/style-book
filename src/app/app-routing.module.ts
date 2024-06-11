import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {TypographyComponent} from "./typography/typography.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {CheckboxRadioComponent} from "./checkbox-radio/checkbox-radio/checkbox-radio.component";
import {ElementsComponent} from "./elements/elements/elements.component";
import {ListComponent} from "./list/list.component";
import {MenutreeComponent} from "./menutree/menutree.component";
import {CardboxComponent} from "./cardbox/cardbox.component";
import {InputSelectComponent} from "./input-select/input-select.component";
import {TableContentComponent} from "./table-content/table-content.component";

const routes: Routes = [
  {
    path: 'cardbox',
    component: CardboxComponent,
    pathMatch: 'full'
  },
  {
    path: 'button',
    component: ButtonComponent,
    pathMatch: 'full'
  },
  {
    path: 'typography',
    component: TypographyComponent,
    pathMatch: 'full'
  },
  {
    path: 'toolbar',
    component: ToolbarComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkbox-radio',
    component: CheckboxRadioComponent,
    pathMatch: 'full'
  },
  {
    path: 'elements',
    component: ElementsComponent,
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent,
    pathMatch: 'full'
  },
  {
    path: 'menutree',
    component: MenutreeComponent,
    pathMatch: 'full'
  },
  {
    path: 'input-select',
    component: InputSelectComponent,
    pathMatch: 'full'
  },
  {
    path: 'table-content',
    component: TableContentComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
