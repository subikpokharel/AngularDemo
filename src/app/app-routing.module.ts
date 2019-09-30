import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { NgModule } from '@angular/core';

const appRoutes : Routes = [
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo:'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule{}