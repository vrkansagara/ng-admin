import { NgModule } from '@angular/core';

// Applicatin Specific
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { SiteLayoutComponent } from '../_layout/site-layout/site-layout.component'
import { AboutComponent } from '../page/about/about.component';



const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent }
        ]
    },
    

    //no layout routes
    { path: '**', component: PageNotFoundComponent }
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
