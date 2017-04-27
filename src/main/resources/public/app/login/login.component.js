"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const login_service_1 = require('./login.service');
const router_1 = require('@angular/router');
let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.message = "Login Page";
        this.loading = false;
        this.model = {};
        this.registerModel = {};
        this.validPassword = true;
        this.errorLoggingIn = false;
        this.errorSigningUp = false;
    }
    createUser() {
        this.loading = true;
        this.loginService.createUser(this.registerModel.name, this.registerModel.email, this.registerModel.password).subscribe(res => {
            if (res) {
                this.router.navigate(['/']);
                window.location.reload();
            }
        }, error => {
            console.log(error);
            this.loading = false;
            this.errorSigningUp = true;
        });
    }
    checkPassword() {
        let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$%\^&\*])(?!.*\s).{8,25}$/;
        if (typeof (this.model.password) !== "undefined") {
            if (this.model.password.length < 8) {
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
    checkPasswordRegister() {
        let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$%\^&\*])(?!.*\s).{8,25}$/;
        if (typeof (this.model.password) !== "undefined") {
            if (this.model.password.length < 8) {
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
    login() {
        this.loading = true;
        this.loginService.login(this.model.email, this.model.password).subscribe(res => {
            if (res) {
                this.router.navigate(['/']);
                window.location.reload();
            }
        }, error => {
            console.log(error);
            this.loading = false;
            this.errorLoggingIn = true;
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './app/login/login.html',
        styleUrls: ['./app/login/login.css'],
        providers: [login_service_1.LoginService]
    }), 
    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map