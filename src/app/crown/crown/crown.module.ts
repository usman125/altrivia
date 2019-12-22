import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from "@ngx-translate/core";
import { CrownPageRoutingModule } from './crown-routing.module';

import { CrownPage } from './crown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CrownPageRoutingModule
  ],
  declarations: [CrownPage]
})
export class CrownPageModule {}
