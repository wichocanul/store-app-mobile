import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthMainComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,

    AuthRoutingModule
  ]
})
export class AuthModule { }
