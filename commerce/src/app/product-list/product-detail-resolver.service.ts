import { Injectable } from '@angular/core';
import {Product} from "../shared/product";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ProductService} from "../core/shared/product.service";
import {Observable} from "rxjs/Observable";

export type ProductDetail = {
  product: Product,
  relatedProduct: Product[]
}

@Injectable()
export class ProductDetailResolver implements Resolve<ProductDetail>{

  constructor(private productService: ProductService, private router: Router) {

  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductDetail> {
    let id = route.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/products']);
    }
    return Observable.forkJoin(
      this.productService.getProductsById(id),
      this.productService.getRelatedProducts(id)
    ).map(v => ({
      product: v[0],
      relatedProduct: v[1]
    }));
  }

}
