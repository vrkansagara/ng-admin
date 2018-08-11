import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';

import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { FooComponent } from './foo/foo.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


import { GoogleMaterialModule }  from '../google-material/google-material.module';
import {HttpClientModule} from '@angular/common/http';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GoogleMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [FooComponent, BarComponent, BazComponent, HelloWorldComponent],
  exports : [
    HelloWorldComponent
  ]
})
export class HelloWorldModule implements OnInit{
  ngOnInit()    { console.log('onInit'); }
}