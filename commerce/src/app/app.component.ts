import {Component, ViewChild} from '@angular/core';
import {Product} from "./shared/product";
import {ProductComponent} from "./product/product.component";


@Component({
  selector: 'dany-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  /*
    @ViewChild(ProductComponent)
    productComponent : ProductComponent;

  */

  viewDetail(product: Product) {

    console.log(product);
  }

  addCart(product: Product) {
    console.log(product);
  }

  addStar(product: Product) {
    console.log(product);
  }

}
