import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartItem} from "./cart-item";
import {Product} from "../../shared/product";
import {CartService} from "../shared/cart.service";

@Component({
  selector: 'dany-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartItem[]= [];

  @Output()
  onClose = new EventEmitter();
/*
  @Output()
  onItemRemove = new EventEmitter();*/

  onCloseClicked() {
    this.onClose.emit();
  }

 /* addCart(product: Product) {

    const foundProduct = this.cart.find(c => c.product.id === product.id);
    if(foundProduct) {
      foundProduct.counts += 1;
    } else {
      this.cart.push({product, counts:1});
    }
  }*/

  getTotal() {
    return this.cart.reduce((p, n) => p+(n.counts * n.product.price), 0);
  }

  remove(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

  constructor(private cartService: CartService) {
    this.cartService.cartItems.subscribe(v => this.cart = v);
  }

  ngOnInit() {
  }

}
