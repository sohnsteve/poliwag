import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BB } from '../bb';

@Component({
  selector: 'app-shipto',
  templateUrl: './shipto.component.html',
  styleUrls: ['./shipto.component.css']
})
export class ShiptoComponent implements OnInit {

name: String;
addr1: String;
addr2: String;
city: String;
prov: String;
post: String;
del_instr: String;


  constructor(private location: Location) 
  { 
    this.name = BB.instance.ship_name;
  }

  ngOnInit() {
  }

  onSubmit()
  {
    BB.instance.ship_name = this.name;
    this.location.back();
  }

}
