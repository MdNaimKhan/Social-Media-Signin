import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})



export class NewAuth {

  private loggedInStatus = false 


  constructor( private http: HttpClient) { }

  setLoggedIn(value: boolean){
     
    this.loggedInStatus= value

  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

 

  
}
