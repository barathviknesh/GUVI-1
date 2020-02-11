import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [{
    img:"../assets/img/product/p1.jpg",
    title:"addidas New Hammer sole for Sports person",
    price1:150.00,
    price2:210.00
  },
  {
    img:"../assets/img/product/p6.jpg",
    title:"addidas New Hammer sole for Sports person",
    price1:150.00,
    price2:210.00
  },
  {
    img:"../assets/img/product/p8.jpg",
    title:"addidas New Hammer sole for Sports person",
    price1:150.00,
    price2:210.00
  },
  {
    img:"../assets/img/product/p3.jpg",
    title:"addidas New Hammer sole for Sports person",
    price1:150.00,
    price2:210.00
  }];
  constructor() { }

  ngOnInit() {
  }

}
