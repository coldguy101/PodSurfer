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
const podcast_service_1 = require('./podcast.service');
const login_service_1 = require("../login/login.service");
const profile_service_1 = require("../profile/profile.service");
let PodcastsComponent = class PodcastsComponent {
    constructor(podcastService, loginService, profileService) {
        this.podcastService = podcastService;
        this.loginService = loginService;
        this.profileService = profileService;
        this.loggedIn = false;
    }
    ngOnInit() {
        const that = this;
        let success = function (podcasts) {
            that.podcasts = podcasts;
        };
        this.podcastService.getAllPodcasts().then(success);
        this.loggedIn = this.loginService.isLoggedIn();
        if (this.loggedIn)
            this.profileService.getBookmarks(this.loginService.getToken());
    }
    rmPodcast(pcast) {
        delete this.podcasts[this.podcasts.indexOf(pcast)];
        this.podcastService.rmPodcast(pcast._id);
    }
    favoritePodcast(podID) {
        this.profileService.addBookmark(podID, this.loginService.getToken());
    }
    unFavoritePodcast(podID) {
        this.profileService.removeBookmark(podID, this.loginService.getToken());
    }
    isPodcastFavorited(podID) {
        return this.profileService.isPodcastBookmarked(podID, this.loginService.getToken());
    }
};
PodcastsComponent = __decorate([
    core_1.Component({
        selector: 'podcast',
        templateUrl: './app/podcast/podcasts.html',
        providers: [podcast_service_1.PodcastService, login_service_1.LoginService, profile_service_1.ProfileService]
    }), 
    __metadata('design:paramtypes', [podcast_service_1.PodcastService, login_service_1.LoginService, profile_service_1.ProfileService])
], PodcastsComponent);
exports.PodcastsComponent = PodcastsComponent;
//# sourceMappingURL=podcasts.component.js.map