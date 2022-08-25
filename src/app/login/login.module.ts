import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    SingupComponent,
    SinginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastrModule
  ],
  exports: [
    SingupComponent,
    SinginComponent
  ]
})
export class LoginModule { }
