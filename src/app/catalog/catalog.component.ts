import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BB } from '../bb';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalog;
  c_names: string[];
  c_ids: number[];
  ship_name: String;
  //x: BB;

  constructor(
    private http: HttpClient
    ) 
  { 
    this.ship_name = BB.instance.ship_name; 
    let url = "http://localhost:49831/Catalog";
	  this.http.get(url).subscribe(data => 
	  {
      let stuff = data;
      this.catalog = data;
      this.c_names = new Array(7);
      this.c_ids = new Array(7);
      for (let i = 0; i < 7; i++)
      {
        this.c_names[i] = stuff[i].name;
        this.c_ids[i] = stuff[i].id;
      }
	  });
  }

  ngOnInit() 
  {
  }

}
