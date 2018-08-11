import { Component , OnInit, OnChanges, OnDestroy} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoggerService } from './../../service/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy {
  title = 'ng-admin';
  
  ngOnChanges() { this.logIt(`ngOnChanges`); }
  
  /**
  * @Use ngOnInit() for two main reasons:
  To perform complex initializations shortly after construction.
  To set up the component after Angular sets the input properties.
  Experienced developers agree that components should be cheap and safe to construct.
  @good :- An ngOnInit() is a good place for a component to fetch its initial data. 
  this.getHeroes();
  */
  ngOnInit() { this.logIt(`OnInit`); }
  
  /**
   *@usage:- 
   Put cleanup logic in ngOnDestroy(), the logic that must run before Angular destroys the directive. 
   */
  ngOnDestroy() { this.logIt(`ngOnDestroy`); }
  
  
  constructor(
    private titleService: Title ,
    private _logger: LoggerService,
  ) {
    this.title = 'NG-ADMIN';
    this.setTitle(this.title);
    this._logger.log('Starting app.components.ts');
    
  }
  
  private setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  private getTitle() {
    return this.titleService.getTitle();
  }
  
  
  logIt(msg: string) {
    this._logger.log(msg);
  }
}