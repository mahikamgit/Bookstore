import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navals',
  templateUrl: './navals.component.html',
  styleUrls: ['./navals.component.css']
})
export class NavalsComponent implements OnInit {

  constructor(public ds: DataService, private ar: ActivatedRoute) { 
    // this.ar.queryParamMap.subscribe ((qparams)=>{
    //   let category = qparams.get('category')
    //   if(category) {
    //     this.products = this.ds.Bookstore.filter((p,i,parr)=>{
    //       return   p.category==category
    //     })
    //   }
    //   else {
    //     this.products = this.ds.Bookstore
    //   }
    // })
  }

  // products:any = [];
 

  ngOnInit(): void {
   
  }



 

}
