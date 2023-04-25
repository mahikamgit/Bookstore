import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private route: Router, public ds: DataService) { }

  ngOnInit(): void {
  }

 

  navigateToNavals () {
    // this.route.navigate (['romance']) ;
    this.route.navigateByUrl ('navals') ;
  }

}
