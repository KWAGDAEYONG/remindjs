import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from "./shared/shared.module";
import {CheckoutModule} from "./checkout/checkout.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeModule} from "./home/home.module";
import {HomeComponent} from "./home/home/home.component";
import {CheckoutComponent} from "./checkout/checkout/checkout.component";
import {ProductListModule} from "./product-list/product-list.module";
import {AuthGuard} from "./auth-guard.service";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path:'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    CheckoutModule,
    HomeModule,
    ProductListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
