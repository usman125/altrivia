import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectModePageRoutingModule } from './select-mode-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SelectModePage } from './select-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SelectModePageRoutingModule
  ],
  declarations: [SelectModePage]
})
export class SelectModePageModule { }
