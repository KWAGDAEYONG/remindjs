import {Component, ViewChild} from '@angular/core';
import {Product} from "./shared/product";
import {CartComponent} from "./core/cart/cart.component";
import {NaviComponent} from "./core/navi/navi.component";
import {DrawerComponent} from "./shared/drawer/drawer.component";
import {BsModalService} from "ngx-bootstrap";
import {SignupComponent} from "./core/signup/signup.component";


@Component({
  selector: 'dany-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(NaviComponent)
  naviComponent: NaviComponent;

  @ViewChild(DrawerComponent)
  drawerComponent: DrawerComponent;

  productList : Product[] = [
    {
      id: '1',
      name: 'angular note1',
      price: 1000,
      info: 'test',
      avg_stars: 1,
      total_reviews: 100
    },
    {
      id: '2',
      name: 'angular note2',
      price: 2000,
      info: 'test',
      avg_stars: 2,
      total_reviews: 200
    },
    {
      id: '3',
      name: 'angular note3',
      price: 3000,
      info: 'test',
      avg_stars: 3,
      total_reviews: 300
    },
    {
      id: '4',
      name: 'angular note4',
      price: 4000,
      info: 'test',
      avg_stars: 4,
      total_reviews: 400
    }
  ]
  title = 'dany';

  constructor(private bsModal: BsModalService) {

  }

  signUp() {
    this.bsModal.config.class = 'signup';
    this.bsModal.show(SignupComponent);

  }


  viewDetail(product: Product) {

    console.log(product);
  }

  addCart(product: Product, cart: CartComponent) {
    cart.addCart(product);
    this.naviComponent.cartTotalCount = cart.cart.length;
    this.drawerComponent.open();
  }

  addStar(product: Product) {

    console.log(product.avg_stars);
  }

}
