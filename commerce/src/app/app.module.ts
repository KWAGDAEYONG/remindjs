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

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path:'checkout', component: CheckoutComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
