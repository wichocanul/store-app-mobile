import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from 'src/app/interfaces/product-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = environment.urlStoreApp;

  constructor(private http: HttpClient) { }

  searchCategory(category: string): Observable<ProductResponse> {

    let url = ``;
    category == 'todo' ? url = `${this.baseUrl}/products/search` : url = `${this.baseUrl}/products/search?category=${category}`;

    const headers = new HttpHeaders()
      .set('Authorization', sessionStorage.getItem('token') || '');

    return this.http.get<ProductResponse>( url, { headers });
  }

  searchArticle(word: string): Observable<ProductResponse> {
    let url = ``;
    word == 'todo' ? url = `${this.baseUrl}/products/search` : url = `${this.baseUrl}/products/search?search_term=${word}`;

    return this.http.get<ProductResponse>( url );
  }
}
