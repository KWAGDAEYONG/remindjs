import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap";
import {AuthService} from "../shared/auth.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dany-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  @ViewChild(NgForm) signupForm: NgForm;

  constructor(public modal: BsModalRef, public auth: AuthService) { }

  ngOnInit() {
  }

  signup(email, password) {
    if (this.signupForm.controls.email.errors) {
      this.errorMessage = "email is required!"
      return;
    }

    if (this.signupForm.controls.password.errors) {
      const err = this.signupForm.controls.password.errors;
      if (err.required) {
        this.errorMessage = "password is required!"
      } else {
        this.errorMessage = "password should have more than 6 characters!"
      }
      return;
    }

    if (this.errorMessage) {
      this.errorMessage = undefined;
    }

    this.auth.signUp(email, password)
      .catch( e => {
        this.errorMessage = e.error.msg;
        return Observable.of();
      })
      .subscribe(v => this.modal.hide(), e => console.error(e), () => console.log("completed"));

  }
}
