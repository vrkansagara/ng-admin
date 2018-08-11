import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../service/logger/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  siteTitle: string;
  constructor(
    private logger: LoggerService,
  ) {
    
  }
  
  ngOnInit() {
  }
  
}
