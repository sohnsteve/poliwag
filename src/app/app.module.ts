import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShiptoComponent } from './shipto/shipto.component';

const routes: Routes = 
[
  { path: 'catalog', component: CatalogComponent },
  { path: 'category/:id/:name', component: CategoryComponent },
  { path: 'product/:id/:name', component: ProductComponent },
  { path: 'cart/:item', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shipto', component: ShiptoComponent },
  { path: '', redirectTo: '/catalog', pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CategoryComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ShiptoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
