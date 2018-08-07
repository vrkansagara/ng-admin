// Module(s)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HelloWorldModule } from './hello-world/hello-world.module';

// Component
import { AppComponent } from './app-component/app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './page/about/about.component';

// Layout Component
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { LeftSidebarComponent } from './_layout/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './_layout/right-sidebar/right-sidebar.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    SiteLayoutComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloWorldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
