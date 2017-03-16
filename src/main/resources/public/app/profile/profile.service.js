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
require('rxjs/add/operator/toPromise');
let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getMyProfile() {
        return Promise.resolve({
            "_id": "012345678912",
            "name": "Kelleigh Laine",
            "email": "kelleigh.maroney@gmail.com",
            "interests": ["technology", "politics"],
            "bookmarks": ["123456789123", "234567891234"]
        });
    }
    handleError(error) {
        console.error('An error occurred retrieving podcasts', error);
        return Promise.reject(error.message || error);
    }
};
ProfileService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map