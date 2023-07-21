import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, BookModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
