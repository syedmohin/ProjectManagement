import { Component, OnInit } from '@angular/core';
import { HttpSpringService } from '../services/http-spring.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string
  password: string
  fullName: string

  constructor(private http: HttpSpringService, private router: Router) { }

  ngOnInit(): void { }
  reg() {
    this.http.reg({
      "username": this.username,
      "password": this.password,
      "fullName": this.fullName
    }).subscribe(_ => {
      this.router.navigate([''])
    }, _ => {
      this.router.navigateByUrl("/reg");
    })
  }
}


