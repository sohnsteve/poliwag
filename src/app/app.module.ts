import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = 
[
  { path: '', redirectTo: '/catalog', pathMatch: "full" },
  { path: 'catalog', component: CatalogComponent },
  { path: 'category', component: CategoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CategoryComponent
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
