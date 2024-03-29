import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectModePage } from './select-mode.page';

const routes: Routes = [
  {
    path: '',
    component: SelectModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectModePageRoutingModule {}
