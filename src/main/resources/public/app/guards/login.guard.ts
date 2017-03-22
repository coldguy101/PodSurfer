/**
 * Created by sean on 3/21/17.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private login: LoginService) {}

  canActivate() {
    return this.login.isLoggedIn();
  }
}