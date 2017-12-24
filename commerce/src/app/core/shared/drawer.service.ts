import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable()
export class DrawerService {


  constructor(@Inject(DOCUMENT) private doc: Document) { }

  open() {
    this.doc.body.style.transform = 'translateX(-320px)';
  }

  close() {
    this.doc.body.style.transform = 'translateY(0)';
  }
}
