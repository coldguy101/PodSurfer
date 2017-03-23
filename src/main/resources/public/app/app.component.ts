import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    providers: [LoginService]
})

export class AppComponent implements OnInit {
    isLoggedIn = false;

    constructor(private loginService: LoginService) {}

    ngOnInit() {
      this.checkLoginStatus();
    }

    checkLoginStatus() {
      this.isLoggedIn = this.loginService.isLoggedIn();
    }

    logout() {
        this.loginService.logout();
        this.checkLoginStatus();
    }

    toggleState() {
      this.isLoggedIn = !this.isLoggedIn;
    }
}