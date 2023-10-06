import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { AuthMainPage } from './auth-main/auth-main.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';


@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
    AuthMainPage
  ],
  imports: [
    CommonModule,
    IonicModule,

    AuthRoutingModule
  ]
})
export class AuthModule { }
