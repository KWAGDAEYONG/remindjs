import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of'


@Component({
  selector: '[dany-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  @ViewChild(NgForm) loginForm: NgForm;

  constructor(public modal: ModalDirective, private http: HttpClient) { }

  ngOnInit() {
  }

  login(email, password) {
    if (this.loginForm.form.controls.email.errors) {
      this.errorMessage = 'email is required!';
      return;
    }
    if (this.loginForm.form.controls.password.errors) {
      const error = this.loginForm.form.controls.password.errors;
      if (error.required) this.errorMessage = 'password id required!';
      else this.errorMessage = 'password should have more than 6 characters';
      return;
    }
    if (this.errorMessage) this.errorMessage = undefined;

    this.http.post('http://localhost:3000/auth/login', {
      email, password
    })
      .catch( err => {
        console.error(err);
        this.errorMessage = err.error.msg;
        return Observable.of({})
      })
      .do(console.log)
      .subscribe(v => this.modal.hide());
  }

}
