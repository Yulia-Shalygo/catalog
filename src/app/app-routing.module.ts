import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
import { CreateProductComponent } from './catalog/create-product/create-product.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';

const routes: Routes = [
  { path: 'create-product', component: CreateProductComponent },
  { path: '**', component: CatalogComponent}

  //   {path: 'logout', component: HeaderCalendComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
