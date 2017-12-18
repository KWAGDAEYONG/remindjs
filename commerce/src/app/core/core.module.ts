import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NaviComponent, CartComponent, LoginComponent],
  exports: [NaviComponent, CartComponent, LoginComponent]
})
export class CoreModule { }
