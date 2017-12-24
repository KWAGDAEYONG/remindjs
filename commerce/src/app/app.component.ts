import {Component, ViewChild} from '@angular/core';
import {DrawerComponent} from "./shared/drawer/drawer.component";
import {BsModalService} from "ngx-bootstrap";
import {SignupComponent} from "./core/signup/signup.component";
import {ResolveEnd, Router} from "@angular/router";


@Component({
  selector: 'dany-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DrawerComponent) drawer: DrawerComponent;

  isHome = true;

  constructor(private bsModal: BsModalService, private router: Router) {
    router.events.subscribe((v) => {
      if (v instanceof ResolveEnd) {
        if (this.drawer.isOpen) {
          this.drawer.close();
        }
        if (v.url === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    })
  }

  signUp() {
    this.bsModal.config.class = 'signup'
    this.bsModal.show(SignupComponent)
  }


}
