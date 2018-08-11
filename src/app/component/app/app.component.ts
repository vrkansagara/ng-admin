import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoggerService } from '../../service/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-admin';
  
  constructor(
    private titleService: Title ,
    private logger: LoggerService,
  ) {
    this.title = 'NG-ADMIN';
    
    this.logger.log('Setting up siteTitle');
    this.setTitle(this.title);
    
  }
  
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  public getTitle() {
    return this.titleService.getTitle();
  }
}