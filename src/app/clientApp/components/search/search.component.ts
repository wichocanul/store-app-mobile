import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { ProductData } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/service/productsService/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {
  word: string = '';
  wordsFound: ProductData[] = [];
  debouncer: Subject<string> = new Subject();
  isExpanded: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.word = '';
    this.debouncer.pipe(debounceTime(400)).subscribe({
      next: (resp) => {
        console.log(resp);
        this.word = resp;
        this.search()
      },
    });
  }

  search() {
    this.productsService.searchArticle(this.word).subscribe({
      next: (resp) => {
        this.wordsFound = resp.data;
      },
      error: (err) => {
        this.wordsFound = [];
      },
    });
  }

  redirect() {
    this.router.navigateByUrl(`/store/search/${this.word}`)
    this.word = '';
  }

  pressKey() {
    this.debouncer.next(this.word);
    if (this.word) {
      // Cuando hay texto en el campo, muestra el elemento .contSearch
      this.renderer.addClass(this.el.nativeElement.querySelector('.contSearch'), 'show');
      this.isExpanded = true;
    } else {
      // Cuando no hay texto, oculta el elemento .contSearch
      this.renderer.removeClass(this.el.nativeElement.querySelector('.contSearch'), 'show');
      this.isExpanded = false;
    }
  }

  assignWords(word: string) {
    this.word = word.toLocaleLowerCase();
    this.redirect();
  }

}
