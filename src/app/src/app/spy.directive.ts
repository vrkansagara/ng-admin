// Spy on any element to which it is applied.
// Usage: <div mySpy>...</div>

import { LoggerService } from '../../service/logger/logger.service';
import { Directive,OnInit, OnDestroy } from '@angular/core';

let nextId = 1;

@Directive({selector: '[appSpy]'})
export class SpyDirective implements OnInit, OnDestroy {
  constructor(private logger: LoggerService) { }
  
  ngOnInit()    { this.logIt(`onInit`); }
  
  ngOnDestroy() { this.logIt(`onDestroy`); }
  
  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }
}