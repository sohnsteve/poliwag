import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { BB } from '../bb';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

prod_id;
prod_name;
prod;
cart_json;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) 
  { 
    this.route.paramMap.subscribe((params: ParamMap) =>
      {
        this.prod_id = params.get('id');
        this.prod_name = params.get('name');
        BB.name
        let url = "http://localhost:49831/Quote?cors&id=" + this.prod_id;
        this.http.get(url).subscribe(data => 
          {
            this.prod = data;
            let holder = 
            {
              id : this.prod[0].id,
              msrp : this.prod[0].msrp,
              qty : 1 
            };
            this.cart_json = JSON.stringify(holder);
          });
      });
  }

  ngOnInit() {
  }

}
