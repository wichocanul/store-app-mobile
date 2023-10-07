import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAppRoutingModule } from './client-app-routing.module';
import { MainStorePage } from './main-store/main-store.page';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { HomePageModule } from './home/home.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainStorePage
  ],
  imports: [
    CommonModule,
    ClientAppRoutingModule,
    IonicModule,
    RouterModule,

    SharedModule,
    HomePageModule
  ]
})
export class ClientAppModule { }
