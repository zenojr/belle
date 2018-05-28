import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardRouterService  implements CanActivate {

  constructor( private auth: AuthService, private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.auth.check) {
      return true;
    }
    this.router.navigate(['login']);
      return false;
  }

}
