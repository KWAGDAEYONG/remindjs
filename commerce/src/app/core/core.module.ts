import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NaviComponent, CartComponent],
  exports: [NaviComponent, CartComponent]
})
export class CoreModule { }
