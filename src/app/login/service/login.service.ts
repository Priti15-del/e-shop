import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpservice:HttpService) { }
  
  userData(data:any){
    // call http service in login service
    return this.httpservice.postData('users', data)
  }
  authLogin(data:any){
    // when u want data from url use http params
    const params = new HttpParams()
                   .set("emailId",data.emailId)
                   .set("password",data.passWord)
    return this.httpservice.getData('users',params);
  }

}
