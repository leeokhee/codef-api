import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {ProductsComponent} from "./products/products.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'main', component: MainComponent, data: {animation: ''}},
  {path: 'login', component: LoginComponent, data: {animation: ''}},
  {path: 'account', component: AccountComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
