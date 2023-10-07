import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomeMainPage } from './home-main/home-main.page';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { SectionProductsComponent } from './section-products/section-products.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
  ],
  declarations: [
    HomeMainPage,
    SliderHomeComponent,
    SectionProductsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
