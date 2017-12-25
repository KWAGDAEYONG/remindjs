import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./core/shared/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.token
      .map(v => {
        if (v) {
          return true;
        } else {
          alert('Needs to login!')
          return false;
        }
      });
  }

  constructor(private auth: AuthService) { }

}
