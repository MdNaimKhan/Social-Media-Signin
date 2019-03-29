import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NewAuth } from '../auth.service';

import { SessionStorageService } from 'ngx-webstorage'


import { AuthService,
         SocialUser,
         GoogleLoginProvider,
         FacebookLoginProvider } from 'angular-6-social-login-v2';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public user: any = SocialUser;

  

  constructor( private socialAuthService: AuthService, 
               private router: Router, 
               private auth: NewAuth,
               ) {}

   // Method for logging in  using  facebook
       
    facebooklogin() {
     
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
        this.user= userData;
        this.router.navigate(['admin']);
        this.auth.setLoggedIn(true);
        sessionStorage.setItem('user',JSON.stringify(this.user))
      
      });

    }

   // Method for logging in  using  google

    googlelogin(){

      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) =>{
        this.user = userData;
        this.router.navigate(['admin']);
        this.auth.setLoggedIn(true);
        sessionStorage.setItem('user',JSON.stringify(this.user))
        
      }); 
    }

   
   
    ngOnInit() {
    }


}
