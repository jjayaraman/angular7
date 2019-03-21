import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  valid: boolean;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Calling AuthGuard... ' + state + ', next : ' + next);

    // TODO: Validation
    this.valid = false; // Dummy value to test

    if (!this.valid) {
      this.router.navigate(['login']);
    }

    return this.valid;
  }
}
