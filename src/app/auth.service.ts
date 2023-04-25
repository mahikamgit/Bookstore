import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private route : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //  return false ; 
  let loggedIn = false ;
  if (loggedIn) {
    return true ;
  }
  else {
    this.route.navigate (['/login']) ;
    return false ;
  }
  }
}
