import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartItem} from "./cart-item";
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

  onCloseClicked() {
    this.onClose.emit();
  }

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
