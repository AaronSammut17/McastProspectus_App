import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutesPage } from './institutes.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutesPage
  },
  {
    path: 'courses-list',
    loadChildren: () => import('./courses-list/courses-list.module').then( m => m.CoursesListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutesPageRoutingModule {}
