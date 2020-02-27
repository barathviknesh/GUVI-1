import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { decode } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token;
  decoded;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.token = localStorage.getItem("session");
    this.decoded = jwt_decode(this.token);
    console.log(this.decoded);
    console.log(this.decoded['access'] == "allow");

    if(this.decoded['access'] == "allow"){
      return true;
    }else{
      return false;
    }

    //return false;

    
  }
  
}
