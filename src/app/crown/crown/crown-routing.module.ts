import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrownPage } from './crown.page';

const routes: Routes = [
  {
    path: '',
    component: CrownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrownPageRoutingModule {}
