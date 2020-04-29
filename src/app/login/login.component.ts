import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  invalidLogin = false
  constructor(private router: Router,
    private loginservice: AuthenticationServiceService) { }

  ngOnInit(): void { }
  open() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      (data: any) => {
        this.router.navigate(['home'])
        this.invalidLogin = false
      },
      (error: any) => {
        this.invalidLogin = true
      }
    ));
  }
}
