import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./clientApp/pages/client-app.module').then( m => m.ClientAppModule)
  },
  {
    path: '**',
    redirectTo: '/store'
  },
  {
    path: 'home',
    loadChildren: () => import('./clientApp/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./clientApp/pages/category/category.module').then( m => m.CategoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
