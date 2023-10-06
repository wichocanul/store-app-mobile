import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAppRoutingModule } from './client-app-routing.module';
import { MainStorePage } from './main-store/main-store.page';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainStorePage
  ],
  imports: [
    CommonModule,
    ClientAppRoutingModule,
    IonicModule,

    SharedModule
  ]
})
export class ClientAppModule { }
