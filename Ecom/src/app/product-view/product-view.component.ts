import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

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

  productDetails;
  constructor(private route:ActivatedRoute) {
    this.productDetails = this.products[this.route.snapshot.params['id']];
   }

  ngOnInit() {
  }

}
