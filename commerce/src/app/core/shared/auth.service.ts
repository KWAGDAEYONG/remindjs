import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {

  token: Subject<{email: string}>;

  constructor(private http: HttpClient, private jwt: JwtHelperService) {
    const token = jwt.tokenGetter();
    let decode = undefined;
    if (token) {
      decode = jwt.decodeToken(token);
    }
    this.token = new BehaviorSubject(decode);
  }

  signOut() {
    localStorage.removeItem('access_token');
    this.token.next(undefined);
  }

  login(email: string, password: string) {
    return this.http.post<{token}>('http://localhost:3000/api/auth/login', {
      email, password
    })
      .map(v => v.token)
      .do(this.handleToken)
  }

  private handleToken(token: string) {
    localStorage.setItem('access_token',token);
  }

  signUp(email, password) {
    return this.http.post('http://localhost:3000/api/auth/register', {
      email, password
    })
      .do(console.log)
  }


}
