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
const profile_service_1 = require('./profile.service');
const login_service_1 = require('../login/login.service');
let ProfileComponent = class ProfileComponent {
    constructor(profileService, loginService) {
        this.profileService = profileService;
        this.loginService = loginService;
        this.formData = {};
    }
    ngOnInit() {
        const that = this;
        let success = function (user) {
            that.user = user;
            for (let i of user.interests) {
                that.interests += i + ",";
            }
        };
        this.profileService.getProfile(this.loginService.getToken()).then(success);
    }
    updateProfile() {
        if (typeof (this.formData.interests) == "string") {
            this.formData.interests = this.formData.interests.split(",");
        }
        this.profileService.setProfile(this.formData, this.loginService.getToken());
    }
    updateBookmarked() {
    }
    removeBookmarkedPodcast() {
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: './app/profile/profile.html',
        providers: [profile_service_1.ProfileService, login_service_1.LoginService]
    }), 
    __metadata('design:paramtypes', [profile_service_1.ProfileService, login_service_1.LoginService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map