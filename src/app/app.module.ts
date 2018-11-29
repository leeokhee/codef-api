import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainComponent,
    LoginComponent,
    ProductsComponent,
    AccountComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    //
  }
}
