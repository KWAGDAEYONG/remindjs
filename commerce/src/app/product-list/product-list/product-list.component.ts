import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {CartService} from "../../core/shared/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DrawerService} from "../../core/shared/drawer.service";
import {ProductService} from "../../core/shared/product.service";

@Component({
  selector: 'dany-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];

  constructor(private cartService: CartService,
              private router: Router,
              private drawerService: DrawerService,
              private productService: ProductService,
              private route: ActivatedRoute) {
    this.route.queryParams
      .map(v => v["category"])
      .switchMap(v => {
        if(v) {
          return productService.getProductsByCategory(v);
        } else {
          return productService.getAllProducts();
        }
      })
      .subscribe(v => this.productList = v);
  }

  ngOnInit() {
  }

  viewDetail(product: Product) {
    this.router.navigate(['/products', product.id]);
  }

  addCart(product: Product) {
    this.cartService.addCart(product);
    this.drawerService.open();
  }

  addStar(product: Product) {

    console.log(product.avg_stars);
  }
}
