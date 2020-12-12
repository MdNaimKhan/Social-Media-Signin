import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAuth } from './auth.service';
import { NgxWebstorageModule } from 'ngx-webstorage'

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  AuthService,
} from "angular-6-social-login-v2";

import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { AuthGuard } from './auth.guard' 




const config =new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(''),
  },
  {
    id:FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('')
  }
 

]);



export function provideConfig() {

  return config;

}





@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdminComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
    AppRoutingModule,
    NgxWebstorageModule,
    RouterModule.forRoot([
      {
        path:'',
        component: SigninComponent
      },
      {
        path:'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
    
     

    ])
    
  ],
  providers: [
    SigninComponent,
    AuthService,
    NewAuth, 
    AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
