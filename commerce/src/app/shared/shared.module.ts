import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DrawerComponent],
  exports: [DrawerComponent]
})
export class SharedModule { }
