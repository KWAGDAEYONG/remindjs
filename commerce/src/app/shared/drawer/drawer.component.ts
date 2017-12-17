import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'dany-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  isOpen = false;

  constructor( @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit() {
  }

  open() {
    this.isOpen = true;
    this.doc.body.style.transform = 'translateX(-320px)';
  }

  close() {
    this.isOpen = false;
    this.doc.body.style.transform = 'translateY(0)';
  }

}
