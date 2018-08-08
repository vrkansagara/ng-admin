import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  siteTitle: string;
  constructor() { 
    this.siteTitle = 'Vallabh Kansagara'
  }
  
  ngOnInit() {
  }
  
}
