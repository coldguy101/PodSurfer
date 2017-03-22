/**
 * Created by sean on 2/7/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
//import 'rxjs/Rx';      //Not being shipped to the client... Needed to only use the /add/operator/map one for now.

//import 'rxjs/add/operator/toPromise';   Posting here.

@Injectable()
export class LoginService {
  private loggedIn: boolean;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    console.log("User is logged in: " + this.loggedIn + " Token: " + localStorage.getItem('auth_token'));
  }

  createUser(name: string, email: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let body = `name=${name}&email=${email}&password=${password}`;

    console.log(body);

    return this.http
      .post('/api/user/create', /*JSON.stringify({email, password})*/ body, {headers: headers})
      .map(res => res.json())
      .map(res => {
        console.log("Service: " + res);
        localStorage.setItem('auth_token', res.token);
        this.loggedIn = true;
        return res;
      });
  }

  login(email: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let body = `email=${email}&password=${password}`;

    return this.http
      .post('/api/user/login', /*JSON.stringify({email, password})*/ body, {headers: headers})
      .map(res => res.json())
      .map(res => {
        console.log("Service: " + res);
        localStorage.setItem('auth_token', res.token);
        this.loggedIn = true;
        return res;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  private handleError(error: any): PromiseLike<any> {
    console.error('An error occurred', error); // TODO: Remove this for production
    return Promise.reject(error.message || error);
  }
}