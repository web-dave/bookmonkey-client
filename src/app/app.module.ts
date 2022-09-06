import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, TopNavComponent],
  imports: [BrowserModule, AboutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
