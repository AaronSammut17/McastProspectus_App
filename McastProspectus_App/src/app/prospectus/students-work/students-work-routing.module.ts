import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsWorkPage } from './students-work.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsWorkPage
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsWorkPageRoutingModule {}
