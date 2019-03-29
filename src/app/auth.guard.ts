import { Injectable } from '@angular/core';
import { CanActivate, 
         CanActivateChild,
         CanLoad, 
         Route, 
         UrlSegment, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { NewAuth } from './auth.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private auth: NewAuth ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isLoggedIn;
  }
 
}
