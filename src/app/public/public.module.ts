import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';

const router: Routes =[
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path:'home',
        component:HomeComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    MaterialDesign,
  ]
})
export class PublicModule { }
