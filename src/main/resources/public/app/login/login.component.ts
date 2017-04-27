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
  validPassword: boolean = true;

  errorLoggingIn: boolean = false;
  errorSigningUp: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  createUser() {
    this.loading = true;
    this.loginService.createUser(this.registerModel.name, this.registerModel.email, this.registerModel.password).subscribe(
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
        this.errorSigningUp = true;
      }
    );
  }

  checkPassword(): boolean {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$%\^&\*])(?!.*\s).{8,25}$/;
    if(typeof(this.model.password) !== "undefined") {
      if (this.model.password.length < 8) {
        //alert('The password needs to be at least 8 characters in length')
        return false;
      }
      else if (this.model.password.length > 25) {
        return false;
      }
      else if (this.model.password.match(decimal)) {
        return true;
      }
      return false;
    }
  }

  checkPasswordRegister(): boolean {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$%\^&\*])(?!.*\s).{8,25}$/;
    if(typeof(this.model.password) !== "undefined") {
      if (this.model.password.length < 8) {
        //alert('The password needs to be at least 8 characters in length')
        //console.log("too short");
        //this.validPassword = false;
        return false;
      }
      else if (this.model.password.length > 25) {
        //this.validPassword = false;
        return false;
      }
      else if (this.model.password.match(decimal)) {
        //alert('Account created');
        //console.log("matches");
        //this.validPassword = true;
        return true;
      }
      //this.validPassword = false;
      return false;
    }
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
        this.errorLoggingIn = true;
      }
    );
  }
}