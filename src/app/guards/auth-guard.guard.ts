import { 
  CanActivateFn, 
  Router, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot 
} from '@angular/router';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Session } from 'inspector';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';	

import { signal } from "@angular/core";
import { 
    Auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile, 
    user,
    User
} from "@angular/fire/auth";

/*@Injectable({
  providedIn: 'root'
})*/
console.log("no se que monda hago")
console.log(AuthService)

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
 //authService.currentUserSig()
 //console.log(this.authService.login( this.loginForm.value.email, this.loginForm.value.password).subscribe.name);
  
 return true;
  /*const authService = inject(AuthService);
  return authService.isAuthenticated();*/
};
/*
export const authGuard: CanActivateFn = (
  
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
 //authService.currentUserSig()
  //return true;
  
  const authService = inject(AuthService);
  return authService.isAuthenticated();
};*/


/*
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};*/



/*
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isAuthenticated().pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};
*/

/*

export class authGuard implements CanActivateFn {
  constructor(private authService: AuthService, private router: Router) {}

  
  canActivateFn(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated().pipe(
          map(isAuthenticated => {
              if (!isAuthenticated) {
                  this.router.navigate(['/login']);
                  return false;
              }
              return true;
          })
      );
  }
}
*/