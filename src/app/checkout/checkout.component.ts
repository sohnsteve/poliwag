import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { BB } from "../bb";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

cart;
item_total: number[];
cart_total;

  constructor(
    private http: HttpClient,
    private router: Router
  )
  {
    let url = "http://localhost:49831/Cart?cors";
    this.http.get(url, {withCredentials: true}).subscribe(data => 
      {
        this.cart = data;
        this.item_total = new Array(this.cart.length);
      });
     //this.cart = BB.instance.cart;
     //this.item_total = new Array(this.cart.length);
  }

  ngOnInit() {
  }

  findPrice(msrp, qty, index): String
  {
    let x = parseFloat(msrp);
    let y = parseFloat(qty);
    let total = x * y;
    this.item_total[index] = total;
    let d_total = total.toFixed(2);
    return d_total;
  }

  calcTotal(): String
  {
    let total = 0;
    for (let c of this.item_total)
    {
      total += c;
    }
    this.cart_total = total;
    let d_total = total.toFixed(2);
    return d_total;
  }

  goToCatalog()
  {
    this.router.navigateByUrl("/catalog");
  }

  checkout()
  {
    //DONE!!!
  }

}
