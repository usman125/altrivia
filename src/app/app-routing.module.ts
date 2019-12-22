import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'language-popover',
    loadChildren: () => import('./language/language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },
  {
    path: 'select-mode',
    loadChildren: () => import('./selectmode/select-mode/select-mode.module').then( m => m.SelectModePageModule)
  },
  {
    path: 'wheel',
    loadChildren: () => import('./wheel/wheel/wheel.module').then( m => m.WheelPageModule)
  },
  {
    path: 'category/:categoryId',
    loadChildren: () => import('./category/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'crown',
    loadChildren: () => import('./crown/crown/crown.module').then( m => m.CrownPageModule)
  }
  // ,
  // {
  //   path: 'finished',
  //   loadChildren: () => import('./finished/finished/finished.module').then( m => m.FinishedPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
