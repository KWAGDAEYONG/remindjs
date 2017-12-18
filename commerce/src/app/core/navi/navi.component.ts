import {Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'dany-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  didScroll = false;
  changeHeaderOn = 200;
  navbar;

  @Input()
  cartTotalCount= 0;

  @Output()
  onCartClick = new EventEmitter();

  @Output()
  onSignUpClick = new EventEmitter();

  @Output()
  onLoginClick = new EventEmitter();

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.navbar = this.el.nativeElement.querySelector('.navbar-default');
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
