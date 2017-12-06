import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../shared/product";

@Component({
  selector: 'dany-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  _product : Product = {
    id : '1',
    name : '-',
    price : 0,
    info : '-',
    avg_stars : 0,
    total_reviews : 0
  }
  stars : number[] = Array(5).fill(0);

  constructor() { }

  get product(){
    return this._product;
  }

  @Input()
  set product(product : Product){
    this._product = product;
    this.stars = Array(5).fill(0).map((x,i) => (i+1 <= product.avg_stars) ? 1:0);
  }

  ngOnInit() {
  }

  @Output()
  onStarClicked = new EventEmitter<Product>();

  @Output()
  onCartClicked = new EventEmitter<Product>();

  @Output()
  onDetailClicked = new EventEmitter<Product>();
}
