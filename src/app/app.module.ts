// Module(s)
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';
import { HelloWorldModule } from './modules/hello-world/hello-world.module';

// Component
import { AppComponent } from './component/app/app.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './modules/page/about/about.component';

// Layout Component
import { HeaderComponent } from './layout/partial/header/header.component';
import { FooterComponent } from './layout/partial/footer/footer.component';
import { LeftSidebarComponent } from './layout/partial/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './layout/partial/right-sidebar/right-sidebar.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { NamePipe } from './pipes/name/name.pipe';
import { LoggerService } from './service/logger/logger.service';

@NgModule({
  // Declarations—The components, directives, and pipes that belong to this NgModule.
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    SiteLayoutComponent,
    AboutComponent,
    NamePipe
  ],
  // Imports—Other modules whose exported classes are needed by component templates declared in this NgModule.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloWorldModule
  ],
  // Exports—The subset of declarations that should be visible and usable in the component templates of other NgModules.
  exports: [] ,
  // Providers—Creators of services that this NgModule contributes to the global collection of services; 
  // they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)
  providers: [
    Title,
    LoggerService
  ],
  // Bootstrap—The main application view, called the root component, which hosts all other app views. 
  // Only the root NgModule should set this bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }
