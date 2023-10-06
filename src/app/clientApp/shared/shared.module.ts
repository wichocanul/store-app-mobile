import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
