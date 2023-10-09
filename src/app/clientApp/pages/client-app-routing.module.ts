import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStorePage } from './main-store/main-store.page';
import { HomeMainPage } from './home/home-main/home-main.page';
import { CategoryPage } from './category/category-main/category.page';

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
      },
      {
        path: 'search/:category',
        component: CategoryPage
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAppRoutingModule { }
