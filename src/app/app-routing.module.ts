import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponents } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';

const newLocal = 'login';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponents
  },
  {
    path:'forgot-pass',
    component:ForgotComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModules)
    // component:AdminModule
  },
  {
    path:'public',
    loadChildren:()=>import('./public/public.module').then(mod=>mod.PublicModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
