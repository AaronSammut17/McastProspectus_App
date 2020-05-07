import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'prospectus',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  // The parent page for all prospectus interfaces.
  {
    path: 'prospectus',
    children: [
      // http://localhost:4200/prospectus
      {
        path: '',
        loadChildren: () => import('./prospectus/home/home.module').then( m => m.HomePageModule)
      }
    ]
  },
  
  {
    path: 'prospectus/home',
    loadChildren: () => import('./prospectus/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'prospectus/about',
    loadChildren: () => import('./prospectus/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'prospectus/institutes',
    loadChildren: () => import('./prospectus/institutes/institutes.module').then( m => m.InstitutesPageModule)
  },
  {
    path: 'prospectus/contact-us',
    loadChildren: () => import('./prospectus/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'prospectus/students-work',
    loadChildren: () => import('./prospectus/students-work/students-work.module').then( m => m.StudentsWorkPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
