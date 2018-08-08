import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  today : object;
  constructor() {
    this.today = new Date();
  }
  
  ngOnInit() {
  }
  
}
