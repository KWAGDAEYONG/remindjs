import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import {ModalDirective, ModalModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,

  ],
  declarations: [DrawerComponent],
  exports: [DrawerComponent, ModalDirective, FormsModule]
})
export class SharedModule { }
