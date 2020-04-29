import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateService implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationServiceService) { }

  canActivate() {
    if (this.authService.isUserLoggedIn())
      return true;
    else {
      this.router.navigate(['login']);
      return false;
    }
  }

}

