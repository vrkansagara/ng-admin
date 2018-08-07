import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  imports: [
  ],
  declarations: [FooComponent, BarComponent, BazComponent, HelloWorldComponent],
  exports : [
    HelloWorldComponent
  ]
})
export class HelloWorldModule { }
