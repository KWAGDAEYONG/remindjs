import {Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AuthService} from "../shared/auth.service";
import {CartService} from "../shared/cart.service";
import {ResolveEnd, Router} from "@angular/router";

@Component({
  selector: 'dany-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  didScroll = false;
  changeHeaderOn = 200;
  navbar;
  email: string;
  cartTotalCount= 0;
  fixed = false;

  @Output()
  onCartClick = new EventEmitter();

  @Output()
  onSignUpClick = new EventEmitter();

  @Output()
  onLoginClick = new EventEmitter();

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document, private auth: AuthService, private cartService: CartService, private router: Router) {
    auth.token.subscribe(user => {
      if(user) {
        console.log(user.email);
        this.email = user.email;
      } else {
        this.email = undefined;
      }
    });

    this.cartService.cartItems.subscribe(v => this.cartTotalCount = v.length);
  }

  logout() {
    this.auth.signOut();
  }

  ngOnInit() {
    this.navbar = this.el.nativeElement.querySelector('.navbar-default');
    this.router.events.subscribe((v) => {
      if(v instanceof ResolveEnd) {
        if(v.url !== '/home') {
          this.fixed = true;
          this.navbar.classList.add('navbar-scroll')
        } else {
          this.fixed = false;
          this.navbar.classList.remove('navbar-scroll')
        }
      }
    })
  }

  onCartClicked() {
    this.onCartClick.emit();
  }


  @HostListener("window:croll", [])
  onWindowScroll() {
    if(!this.didScroll) {
      this.didScroll = true;

      setTimeout(() => {
        const sy = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if(sy >= this.changeHeaderOn) {
          this.navbar.classList.add('navbar-scroll');
          this.navbar.classList.add('navbar-fixed-top');
        } else {
          this.navbar.classList.remove('navbar-scroll');
          this.navbar.classList.remove('navbar-fixed-top');
        }
        this.didScroll = false;
      }, 250);
    }
  }

}
