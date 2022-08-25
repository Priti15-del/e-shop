import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  signInForm!:FormGroup
@Output()
signInCompleted:EventEmitter<boolean>=new EventEmitter(false);
  constructor(private fb: FormBuilder,private login:LoginService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      "emailId":['',[Validators.required]],
      "passWord":['',[Validators.required]]
    })

  }
  signIn(){
    if(this.signInForm.valid){
      this.login.authLogin(this.signInForm.value).subscribe((res)=>{
        if(Array.isArray(res) && res.length>0){
          let user=res[0];
          user['token']='aseyujjjg'
          localStorage.setItem("user",JSON.stringify(user))
          this.signInCompleted.emit(true)
          this.toaster.success("login successfully")
         }else{
          this.toaster.error("User doesn't exist please go ahead and register");

        }
      },
      error=>{

      })
    }

  }

}
