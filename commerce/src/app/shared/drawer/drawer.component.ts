import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {DrawerService} from "../../core/shared/drawer.service";

@Component({
  selector: 'dany-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  isOpen = false;

  constructor(private drawerService:DrawerService) { }

  ngOnInit() {
  }

  open() {
    this.drawerService.open()
    this.isOpen = true;
  }

  close() {
    this.drawerService.close();
    this.isOpen = false;

  }

}
