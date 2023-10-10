import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-target-category',
  templateUrl: './target-category.component.html',
  styleUrls: ['./target-category.component.scss'],
})
export class TargetCategoryComponent  implements OnInit {
  title: string = '';
  price: string = '';
  priceOff: string = '';
  finalPrice: string = '';
  statusPriceOff: boolean = false;
  shipmentStatus: string = '';

  @Input() product: ProductData = {
    id: 0,
    name: '',
    description: '',
    price: '',
    stock: 0,
    image: [''],
    sku: '',
    category_id: '',
  };

  constructor() {}

  ngOnInit() {
    this.setData();
  }

  setData(): void {
    if (!this.product.priceOff) {
      this.price = '';
      this.finalPrice = this.product.price;
      this.priceOff = '';
      this.statusPriceOff = true;
    } else {
      this.price = `$ ${this.product.price}`;
      this.priceOff = this.product.priceOff;
      const discount =
        (parseInt(this.priceOff) * parseFloat(this.product.price)) / 100;
      this.finalPrice = discount.toString();
    }
    parseFloat(this.finalPrice) > 300 ? this.shipmentStatus = 'envio gratis' : this.shipmentStatus = 'mas 99 envio'
    this.title = this.product.name;
  }

}
