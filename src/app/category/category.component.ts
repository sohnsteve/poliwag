import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat_id;
  cat_name;
  products;
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) 
  {
    this.route.paramMap.subscribe((params: ParamMap) =>
      {
        this.cat_id = params.get('id');
        this.cat_name = params.get('name');
        let url = "http://localhost:49831/List?cors&id=" + this.cat_id;
        this.http.get(url).subscribe(data => 
          {
            this.products = data;
          });
      });
  }

  ngOnInit() {
  }

}
