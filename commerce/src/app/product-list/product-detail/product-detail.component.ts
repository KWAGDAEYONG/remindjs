import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {CartService} from "../../core/shared/cart.service";
import {DrawerService} from "../../core/shared/drawer.service";
import {ActivatedRoute} from "@angular/router";
import {ProductDetail} from "../product-detail-resolver.service";

@Component({
  selector: 'dany-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  relatedProducts : Product[];

  constructor(private cartService: CartService, private drawerService: DrawerService, private route: ActivatedRoute) {
    this.route.data.subscribe((data: {productDetail: ProductDetail}) => {
      this.product = data.productDetail.product;
      this.relatedProducts = data.productDetail.relatedProduct;

    })
  }

  ngOnInit() {
  }

  viewDetail(product: Product) {

    console.log(product);
  }

  addCart(product: Product) {
    this.cartService.addCart(product);
    this.drawerService.open();
  }

  addStar(product: Product) {

    console.log(product.avg_stars);
  }
}
