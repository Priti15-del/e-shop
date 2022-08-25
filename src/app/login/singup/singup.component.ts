import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { passWordMisMatch } from 'src/app/shared/validators/cus-validators';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  @Input()
  actionName:string = '';
  user:any;

  @Output()
  signUpCompleted:EventEmitter<boolean>=new EventEmitter(false);

  // form group varivable creation************
  signupForm:any= FormGroup;


  constructor(private fb:FormBuilder,private login:LoginService,private auth:AuthenticationService) { }

  ngOnInit(): void {
        // call the dine method
    //  setdata by using patchvalue and signform is fill with back end data
        this.createFormstructure();
        this.user = this.auth.getUser();
        if(this.user != null)
        {
          this.signupForm.patchValue(this.user);
        }

  };
  // check input decorator data
  ngAfterViewInit(){
    console.log('actionName', this.actionName);
  }

    // form group parameter
    createFormstructure() {
      this.signupForm = this.fb.group({
        "firstName": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[a-zA-z]+$")]],
        "lastName": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[a-zA-z]+$")]],
        "mobileNo": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        "dateofBirth": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        "emailId": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        // use the fuction validors to apply the condition ************
        "passWord": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        "confirmPassword": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        "isFromAccept":[false,[Validators.required]],
        "address": this.fb.group({
          "line1": ['', [Validators.required]],
          "line2": ['', []],
          "city": ['', []],
          "state": ['', []],
          "zipCode": ['', [Validators.required]],
        })
      },{validator:passWordMisMatch});
  
    }
    OnSubmit(){
      if(this.signupForm){
        console.log(this.signupForm)
        this.login.userData(this.signupForm.value).subscribe((res)=>{
          console.log("response",res)
          this.signUpCompleted.emit(true);
         })
      }         

       console.log(".fromvalue",this.signupForm.value)
    };
    get FirstName(){
     return  this.signupForm.get('firstName')
    }
  

}
