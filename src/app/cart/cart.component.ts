import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { BB } from '../bb';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cart;
item;
qty: number[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) 
  { 
    this.route.paramMap.subscribe((params: ParamMap) =>
      {
        this.item = params.get('item');
        /*
        let url = "http://localhost:49831/Cart?cors&item=" + this.item;
        this.http.get(url, {withCredentials: true}).subscribe(data => 
          {
            this.cart = data;
            let entries = this.cart.length;
            this.qty = new Array(entries);
          });
          */
         this.callCart(this.item);
      });
  }

  ngOnInit() {
  }

  update(num, cart_item)
  {
    let new_qty = parseInt(num);
    cart_item.qty = new_qty;
    delete cart_item.name;
    let update_item = JSON.stringify(cart_item);
    /*
    let url = "http://localhost:49831/Cart?cors&item=" + update_item;
    this.http.get(url, {withCredentials: true}).subscribe(data => 
      {
        this.cart = data;
        let entries = this.cart.length;
        this.qty = new Array(entries);
      });
      */
     this.callCart(update_item);
  }

  callCart(cart_item)
  {
    let url = "http://localhost:49831/Cart?cors&item=" + cart_item;
    this.http.get(url, {withCredentials: true}).subscribe(data => 
      {
        this.cart = data;
        BB.instance.cart = this.cart;
        let entries = this.cart.length;
        this.qty = new Array(entries);
      });
  }

  checkShip()
  {
      //if shipping name has not been filled out, i.e., it is empty
    if (BB.instance.ship_name == null)
    {
      this.router.navigateByUrl("/shipto");
    }
      //else, shipping name has been entered, proceed to checkout
    else
    {
      this.router.navigateByUrl("/checkout");
    }
  }

}
