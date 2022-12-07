import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

const providers: Provider[] = [];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [...providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
