import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../core/shared/auth.service";
import {Order} from "./order";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CheckoutService {
  email: string;
  constructor(private http: HttpClient, private auth: AuthService) {
    auth.token
      .filter(v => !!v)
      .subscribe(v => {
        this.email = v.email;
      });
  }

  sendOrder(order: Order): Observable<any> {
    if(this.email) {
      order.email = this.email;
      return this.http.post('http://localhost:3000/api/orders', order);
    } else {
      return Observable.throw(new Error('user is not logged in'));
    }
  }


}
