import { NgModule, OnInit } from '@angular/core';

import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { FooComponent } from './foo/foo.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  imports: [
  ],
  declarations: [FooComponent, BarComponent, BazComponent, HelloWorldComponent],
  exports : [
    HelloWorldComponent
  ]
})
export class HelloWorldModule implements OnInit{
  ngOnInit()    { console.log('onInit'); }
 }