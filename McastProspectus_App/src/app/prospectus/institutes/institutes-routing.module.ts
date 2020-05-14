import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutesPage } from './institutes.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutesPage
  },
  {
    path: 'courses-list/:code',
    loadChildren: () => import('./courses-list/courses-list.module').then( m => m.CoursesListPageModule)
  },
  {
    path: 'course/:code',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutesPageRoutingModule {}
