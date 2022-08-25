import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinginComponent } from './login/singin/singin.component';
import { SingupComponent } from './login/singup/singup.component';

const routes: Routes = [
  {path:'product',component:HomeComponent},
  {path:'signIn',component:SinginComponent},
  {path:'signUp',component:SingupComponent},
  {path:'',redirectTo:'/product',pathMatch:'full'},
  // {path:'**'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
