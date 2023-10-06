import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStorePage } from './main-store/main-store.page';

const routes: Routes = [
  {
    path: '',
    component: MainStorePage,
    children: [
      {
        path: 'home',
        component: MainStorePage
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAppRoutingModule { }
