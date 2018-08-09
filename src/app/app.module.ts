// Module(s)
import { BrowserModule,Title } from '@angular/platform-browser';
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
import { NamePipe } from './pipes/name.pipe';
@NgModule({
  //declarations—The components, directives, and pipes that belong to this NgModule.
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
  //imports—Other modules whose exported classes are needed by component templates declared in this NgModule.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloWorldModule
  ],
  //exports—The subset of declarations that should be visible and usable in the component templates of other NgModules.
  exports: [] ,
  //providers—Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)
  providers: [
    Title
  ],
  // bootstrap—The main application view, called the root component, which hosts all other app views. Only the root NgModule should set this bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }
