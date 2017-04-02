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
const home_service_1 = require('./home.service');
const podcast_service_1 = require("../podcast/podcast.service");
let HomeComponent = class HomeComponent {
    constructor(homeService, podcastService) {
        this.homeService = homeService;
        this.podcastService = podcastService;
        this.welcome = "Search for Podcasts!";
        this.zen = "Temporary";
    }
    ngOnInit() {
        let that = this;
        let success = function (podcasts) {
            that.recommendedPodcasts = podcasts;
        };
        this.podcastService.getAllPodcasts().then(success);
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: '../../../app/home/home.html',
        providers: [home_service_1.HomeService, podcast_service_1.PodcastService]
    }), 
    __metadata('design:paramtypes', [home_service_1.HomeService, podcast_service_1.PodcastService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map