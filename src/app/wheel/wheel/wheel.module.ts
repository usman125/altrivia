import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WheelPageRoutingModule } from './wheel-routing.module';
import { TranslateModule } from "@ngx-translate/core";
import { WheelPage } from './wheel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WheelPageRoutingModule
  ],
  declarations: [WheelPage]
})
export class WheelPageModule {}
