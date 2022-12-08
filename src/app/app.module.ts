import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor';
import { BookPreviewComponent } from './books/book-preview/book-preview.component';
import { CompComponent } from './comp/comp.component';

const providers: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    LoginComponent,
    BookPreviewComponent,
    CompComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [...providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
