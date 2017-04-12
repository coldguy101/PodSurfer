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
const podcast_service_1 = require("../podcast/podcast.service");
let ProfileComponent = class ProfileComponent {
    constructor(profileService, loginService, podcastService) {
        this.profileService = profileService;
        this.loginService = loginService;
        this.podcastService = podcastService;
        this.formData = {};
        this.bookmarked = [];
    }
    ngOnInit() {
        const that = this;
        let success = function (user) {
            that.user = user;
            if (user.interests instanceof Array) {
                that.interests = user.interests.toString();
            }
        };
        this.profileService.getProfile(this.loginService.getToken()).then(success);
        let bookSuccess = function (marked) {
            let other = that;
            let pSuccess = function (pcast) {
                other.bookmarked.push(pcast);
            };
            for (let id of marked) {
                console.log("Podcast ID: " + id);
                that.podcastService.getPodcastFromID(id).then(pSuccess);
            }
        };
        this.profileService.getBookmarksPromise(this.loginService.getToken())
            .then(bookSuccess);
    }
    updateProfile() {
        if (typeof (this.formData.interests) === "string") {
            this.formData.interests = this.formData.interests.split(",");
        }
        this.profileService.updateProfile(this.formData, this.loginService.getToken());
    }
    removeBookmarkedPodcast() {
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: './app/profile/profile.html',
        providers: [profile_service_1.ProfileService, login_service_1.LoginService, podcast_service_1.PodcastService]
    }), 
    __metadata('design:paramtypes', [profile_service_1.ProfileService, login_service_1.LoginService, podcast_service_1.PodcastService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map