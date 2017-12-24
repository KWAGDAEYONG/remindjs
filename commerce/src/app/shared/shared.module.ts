import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import {ModalDirective, ModalModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from "./product/product.component";
import {RouterModule} from "@angular/router";
import {DrawerService} from "../core/shared/drawer.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    RouterModule
  ],
  declarations: [DrawerComponent, ProductComponent],
  exports: [DrawerComponent, ModalDirective, FormsModule, ProductComponent, RouterModule],
  providers: [DrawerService]
})
export class SharedModule { }
