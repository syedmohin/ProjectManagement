import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: any) {
    return this.httpClient.post('http://192.168.0.11:7071/login', { username, password }).pipe(
      map(
        (userData: any) => {
          localStorage.setItem('username', username);
          let tokenStr = 'Bearer ' + userData.jwttoken;
          localStorage.setItem('token', tokenStr);
          return userData;
        }
      ))
  }
  isUserLoggedIn() {
    let user = localStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }
}

export class User {
  constructor(public status: string) { }

}

export class JwtResponse {
  constructor(public jwttoken: string) { }
}