import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-products',
  templateUrl: './section-products.component.html',
  styleUrls: ['./section-products.component.scss'],
})
export class SectionProductsComponent  implements OnInit {

  @Input() title: string = '';

  @ViewChild('asContainerCards') containerCards!: ElementRef;

  constructor() { }

  ngOnInit() {}

  moveLeft() {
    let scrollElement = this.containerCards.nativeElement;
    scrollElement.scrollLeft -= 260;
  }

  moveRight() {
    let contenedorElement  = this.containerCards.nativeElement;
    contenedorElement.scrollLeft += 260;
  }

}
