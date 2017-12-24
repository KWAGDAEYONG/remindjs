import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared/shared.module";
import {BannerComponent} from "./banner/banner.component";
import {DrawerService} from "../core/shared/drawer.service";
import {CartService} from "../core/shared/cart.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [HomeComponent, BannerComponent],
  exports: [HomeComponent, BannerComponent],
  providers: [DrawerService, CartService]
})
export class HomeModule { }
