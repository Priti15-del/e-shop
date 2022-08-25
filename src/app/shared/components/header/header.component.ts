import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  actionType:string = 'SignIn';
  // this is use to show the info of user
  isUserLoggedIn:boolean = false ;
  user:any
  // here use vc for hind element of login button 
  @ViewChild('buttonClose') closeButton: any ;

  constructor(private auto:AuthenticationService) { }

  ngOnInit(): void {
    this.getUserDetails()
  }
  handleAction(){
    this.actionType = 'SignUp'
  };
  
  signUpHandler(event:boolean){
    if(event){
      this.actionType = 'SignIn';
    };
    
  };
  getUserDetails(){
    let responseObj = this.auto.getUser();
    if(responseObj != null){
      this.isUserLoggedIn = true ;
      this.user = responseObj
    }};

  signInHandler(event:boolean){
    if(event){
      this.closeButton.nativeElement.click();
      this.getUserDetails();
    }
  };
  logout(){
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
    // this.router.navigate(['/product'])
   // location.reload();
  }
  


}
