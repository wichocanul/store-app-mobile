import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss'],
})
export class SliderHomeComponent  implements OnInit {

  @ViewChild('asContainerCards') containerCards!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  moveLeft() {
    let scrollElement = this.containerCards.nativeElement;
    scrollElement.scrollLeft -= 375;
  }

  moveRight() {
    let contenedorElement  = this.containerCards.nativeElement;
    contenedorElement.scrollLeft += 375;
  }

}
