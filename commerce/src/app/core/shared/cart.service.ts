import { Injectable } from '@angular/core';
import {CartItem} from "../cart/cart-item";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Product} from "../../shared/product";

const storageKey = 'cartKey';

@Injectable()
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject: BehaviorSubject<CartItem[]>;
  public cartItems: Observable<CartItem[]>;

  constructor() {
    const itemJson = localStorage.getItem(storageKey);

    if(itemJson) {
      const parsedItem = JSON.parse(itemJson);
      this.cart = parsedItem;
      this.cartSubject = new BehaviorSubject(parsedItem);
    } else {
      this.cartSubject = new BehaviorSubject([]);
    }

    this.cartItems = this.cartSubject.asObservable();
  }

  addCart(product: Product) {
    const foundProduct = this.cart.find(c => c.product.id === product.id);
    if (foundProduct) {
      foundProduct.counts += 1;
    } else {
      this.cart.push({product, counts: 1});
    }
    this.updateLocalStorage();
    this.cartSubject.next(this.cart);
  }

  remove(cartItem: CartItem) {
    const foundItem = this.cart.find(c => c.product.id ===cartItem.product.id);
    if (foundItem && foundItem.counts > 1) {
      foundItem.counts -= 1;
    } else {
      const index = this.cart.indexOf(foundItem);
      this.cart.splice(index, 1);
    }
    this.updateLocalStorage();
    this.cartSubject.next(this.cart);
  }

  updateLocalStorage() {
    localStorage.setItem(storageKey, JSON.stringify(this.cart));
  }

}
