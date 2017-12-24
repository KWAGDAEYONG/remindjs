import { Component, OnInit } from '@angular/core';
import {Order} from "../order";
import {CartService} from "../../core/shared/cart.service";
import {NgForm} from "@angular/forms";
import {CheckoutService} from "../checkout.service";

@Component({
  selector: 'dany-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  submitted = false;
  order: Order = {
    email: undefined,
    customer: {},
    items: [],
    payment: {},
    order_note:'',
    address: {},
    total_price: 0
  };
  constructor(private cartService: CartService, private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.cartService.cartItems.subscribe(v => {
      this.order.items = v;
      this.order.total_price = this.order.items.reduce((p,n) => p + (n.counts * n.product.price), 0);
    });
  }

  complete(customerForm: NgForm, paymentForm: NgForm) {
    this.submitted = true;
    if (customerForm.form.valid && paymentForm.form.valid && this.order.total_price > 0) {
      this.checkoutService.sendOrder(this.order).subscribe(v => console.log(v));
    } else {
      alert("check form");
    }
  }

}
