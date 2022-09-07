import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashborComponent } from './dashbor/dashbor.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { DialogContentExampleDialog } from './product/product.component';

const routes : Routes = 
[
  {
  path:'',
  component:AdminComponent,
  children:
    [   
      {
        path:'dashbor',
        component:DashborComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'product-detail',
        component:ProductDetailComponent
      }
    ]
  }
]


@NgModule({ 
  declarations: [
    AdminComponent,
    DashborComponent,
    ProductComponent,
    ProductDetailComponent,
    // DialogContentExampleDialog
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class AdminModules { }