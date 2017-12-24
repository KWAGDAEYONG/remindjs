import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { CheckoutComponent } from './checkout/checkout.component';
import {CheckoutService} from "./checkout.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CheckoutComponent],
  exports: [CheckoutComponent],
  providers: [CheckoutService]
})
export class CheckoutModule { }
