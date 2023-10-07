import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { TargetScrollComponent } from './target-scroll/target-scroll.component';



@NgModule({
  declarations: [
    SearchComponent,
    TargetScrollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
    TargetScrollComponent
  ]
})
export class ComponentsModule { }
