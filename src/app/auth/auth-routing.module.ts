import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMainPage } from './auth-main/auth-main.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  {
    path: '',
    component: AuthMainPage,
    children: [
      {
        path: '',
        component: LoginPage
      },
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'register',
        component: RegisterPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
