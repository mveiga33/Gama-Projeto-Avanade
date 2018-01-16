import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  signupUser(user: any) {
    return this.http.post('http://api.avanade.gama.academy/users', {
      user
    });
  }

  loginUser(user: any) {
    return this.http.post('http://api.avanade.gama.academy/login', {
       user
    });
  }
}
