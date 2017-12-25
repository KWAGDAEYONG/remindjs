import {Component, OnInit, ViewChild} from '@angular/core';
import {DrawerComponent} from "../../shared/drawer/drawer.component";
import {Product} from "../../shared/product";
import {NaviComponent} from "../../core/navi/navi.component";
import {CartService} from "../../core/shared/cart.service";
import {BsModalService} from "ngx-bootstrap";
import {DrawerService} from "../../core/shared/drawer.service";

@Component({
  selector: 'dany-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(NaviComponent)
  naviComponent: NaviComponent;

  title = 'dany';
  constructor(private bsModal: BsModalService, private cartService: CartService, private drawerService: DrawerService) { }

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
