import { NgModule } from '@angular/core';

// Applicatin Specific
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { PageNotFoundComponent } from './../component/page-not-found/page-not-found.component';
import { SiteLayoutComponent } from '../layout/site-layout/site-layout.component';
import { AboutComponent } from './../modules/page/about/about.component';
import { HelloWorldComponent } from '../modules/hello-world/hello-world/hello-world.component';

const appRoutes: Routes = [
  // Site routes goes here
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  { 
    path: 'hello-world',
    component: SiteLayoutComponent ,
    children: [
      { path: '', component: HelloWorldComponent, pathMatch: 'full'},
    ]
  },
  // No layout routes
  { 
    path: '**',
    component: SiteLayoutComponent,
    children: [
      {
        path: '', component: PageNotFoundComponent, pathMatch: 'full'
      }
    ]
  }
  // { path: '**', redirectTo: '' } // otherwise redirect to home
];

const routing = RouterModule.forRoot(appRoutes);


@NgModule({
  imports: [
    routing
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
