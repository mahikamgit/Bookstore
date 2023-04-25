import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent implements OnInit {

  constructor(public ds: DataService, private route: ActivatedRoute) { }

  puser : any ;
  userid : any ;

  ngOnInit(): void {
    this.route.paramMap.subscribe ((params)=>{
      this.userid = params.get("id");
      this.puser = this.ds.Bookstore.find (p => p.id == this.userid);
    })
  }

}
