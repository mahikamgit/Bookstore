import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romancechild1',
  templateUrl: './romancechild1.component.html',
  styleUrls: ['./romancechild1.component.css']
})
export class Romancechild1Component implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  data:any = null ;

  getData () {
    this.http.get ("https://fakestoreapi.com/products?limit=5").subscribe ((data)=>{
      this.data = data;
    })
  }

}
