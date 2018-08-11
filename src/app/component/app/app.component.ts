import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoggerService } from './../../service/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-admin';
  
  constructor(
    private titleService: Title ,
    private _logger: LoggerService,
  ) {
    this.title = 'NG-ADMIN';
    this.setTitle(this.title);
    this._logger.log('Starting app.components.ts');

  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  public getTitle() {
    return this.titleService.getTitle();
  }
}