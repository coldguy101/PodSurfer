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
let ProfileComponent = class ProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.user = {
            "_id": "012345678912",
            "name": "Kelleigh Laine",
            "email": "kelleigh.maroney@gmail.com",
            "interests": ["technology", "politics"],
            "bookmarks": ["123456789123", "234567891234"]
        };
        this.message = "Welcome";
    }
    ngOnInit() {
        const that = this;
        let success = function (user) {
            that.user = user;
        };
        this.profileService.getMyProfile().then(success);
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: './app/profile/profile.html',
        providers: [profile_service_1.ProfileService]
    }), 
    __metadata('design:paramtypes', [profile_service_1.ProfileService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map