import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/service/productsService/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  word: string = '';
  products: ProductData[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.word = params['category'];
      this.search();
    });
  }

  search() {
    this.productsService.searchArticle(this.word).subscribe({
      next: (resp) => {
        this.products = resp.data;
      },
      error: (err) => {
        this.products = [];
      },
    });
  }

}
