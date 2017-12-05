import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product";

@Component({
  selector: 'dany-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : Product = {
    id : '1',
    name : 'Angular Note',
    price : 2000,
    info : 'lorem',
    avg_stars : 4,
    total_reviews : 200
  }
  stars : number[] = Array(5).fill(0).map((x,i) => (i+1 <= this.product.avg_stars) ? 1:0);

  constructor() { }

  ngOnInit() {
  }

  onStarClicked(e:Event){
    console.log(e.target);
  }

  onCartClicked(e:Event){
    console.log(e.target);
  }

  onDetailClicked(e:Event){
    console.log(e.target);
  }
}
