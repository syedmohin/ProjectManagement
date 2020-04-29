import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private authentocationService: AuthenticationServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }

}
