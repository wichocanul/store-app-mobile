import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStorePage } from './main-store/main-store.page';
import { HomeMainPage } from './home/home-main/home-main.page';

const routes: Routes = [
  {
    path: '',
    component: MainStorePage,
    children: [
      {
        path: '',
        component: HomeMainPage
      },
      {
        path: 'home',
        component: HomeMainPage
      },
      {
        path: 'shopping-cart',
        component: HomeMainPage
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAppRoutingModule { }
