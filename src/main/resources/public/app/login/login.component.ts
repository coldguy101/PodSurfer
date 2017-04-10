import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component ({
  selector: 'login',
  templateUrl: './app/login/login.html',
  styleUrls: ['./app/login/login.css'],
  providers: [ LoginService ]
})
export class LoginComponent {
  message = "Login Page";
  loading: boolean = false;
  model: any = {};
  registerModel: any = {};

  constructor(private loginService: LoginService, private router: Router) {}

  createUser() {
    this.loading = true;
    this.loginService.createUser(this.registerModel.name, this.registerModel.email, this.registerModel.password).subscribe(
      res => {
        //console.log(res);
        if (res) {
          this.router.navigate(['/']);
        }
      },
      error => {
        //alert("error logging in");
        console.log(error);
        this.loading = false;
      }
    );
  }

  login() {
    this.loading = true;
    //console.log("I GOT HERE!!!!!");
    this.loginService.login(this.model.email, this.model.password).subscribe(
      res => {
        //console.log(res);
        if (res) {
          this.router.navigate(['/']);
          window.location.reload();
        }
      },
      error => {
        //alert("error logging in");
        console.log(error);
        this.loading = false;
      }
    );
  }
}