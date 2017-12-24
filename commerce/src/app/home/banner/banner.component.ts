import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dany-banner',
  templateUrl: './banner.component.html',
  styles: [`.well {
    margin: 0;
    height: 400px;
    background-repeat: no-repeat;
    background-image: url(../../../assets/images/main.jpg);
    background-size: cover;
    background-position: center center;
    padding-left: 30px;
  }

  .caption {
    position: absolute;
    top: 150px;
    left: 40px;
    bottom: auto;
    right: auto;
    text-align: left;
    color: white;
  }

  .caption h1 {
    font-weight: 700;
    font-size: 38px;
    text-transform: uppercase;
    text-shadow: none;
    letter-spacing: -1.5px;
  }`]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
