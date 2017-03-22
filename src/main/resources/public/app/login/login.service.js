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
const http_1 = require('@angular/http');
require('rxjs/add/operator/map');
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.loggedIn = !!localStorage.getItem('auth_token');
        console.log("User is logged in: " + this.loggedIn + " Token: " + localStorage.getItem('auth_token'));
    }
    createUser(name, email, password) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let body = `name=${name}&email=${email}&password=${password}`;
        console.log(body);
        return this.http
            .post('/api/user/create', body, { headers: headers })
            .map(res => res.json())
            .map(res => {
            console.log("Service: " + res);
            localStorage.setItem('auth_token', res.token);
            this.loggedIn = true;
            return res;
        });
    }
    login(email, password) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let body = `email=${email}&password=${password}`;
        return this.http
            .post('/api/user/login', body, { headers: headers })
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
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
LoginService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map