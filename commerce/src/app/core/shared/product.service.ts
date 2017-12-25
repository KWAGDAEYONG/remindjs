import {Observable} from 'rxjs/Rx';
import {Product} from '../../shared/product';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {
  private notes: Product[] = [
    {id: '1', info: 'lorem info', name: 'Angular Note 01', price: 2000, avg_stars: 4, total_reviews: 10},
    {id: '2', info: 'lorem info', name: 'Angular Note 02', price: 3000, avg_stars: 3, total_reviews: 10},
    {id: '3', info: 'lorem info', name: 'Angular Note 03', price: 4000, avg_stars: 1, total_reviews: 10}
  ];

  private watches: Product[] = [
    {id: '4', info: 'lorem info', name: 'Angular watche 01', price: 5000, avg_stars: 5, total_reviews: 10},
    {id: '5', info: 'lorem info', name: 'Angular watche 02', price: 2000, avg_stars: 4, total_reviews: 10},
    {id: '6', info: 'lorem info', name: 'Angular watche 03', price: 3000, avg_stars: 3, total_reviews: 10},
    {id: '7', info: 'lorem info', name: 'Angular watche 04', price: 4000, avg_stars: 1, total_reviews: 10},
    {id: '8', info: 'lorem info', name: 'Angular watche 05', price: 5000, avg_stars: 5, total_reviews: 10}
  ];

  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {
  }

  getProductsByCategory(name): Observable<Product[]> {
    return this.http.get<{products: string[]}>(`${this.apiUrl}/categories/${name}`)
      .catch(e => Observable.of({products:[] as string[]}))
      .flatMap(v => {
        if(v.products.length === 0 ) {
          return Observable.of([]);
        } else {
          return Observable.combineLatest(v.products.map(id => this.getProductsById(id))).do(console.log);
        }
      });
  }

  getProductsById(id): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  getNewProducts(): Observable<Product[]> {
    return Observable.of([...this.notes, ...this.watches]);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getRelatedProducts(id): Observable<Product[]> {
    // 편의상 전체 노트 반환...
    return Observable.of(this.notes);
  }
}
