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
let PodcastsComponent = class PodcastsComponent {
    constructor(podcastService) {
        this.podcastService = podcastService;
        this.message = "All your swanky podcasts are here:";
    }
    ngOnInit() {
        const that = this;
        let success = function (podcasts) {
            that.podcasts = podcasts;
        };
        this.podcastService.getAllPodcasts().then(success);
    }
    rmPodcast(id) {
        console.log("RmPodcast Pushed on ID: " + id);
        delete this.podcasts[id];
        this.podcastService.rmPodcast(id);
    }
};
PodcastsComponent = __decorate([
    core_1.Component({
        selector: 'podcast',
        templateUrl: './app/podcast/podcasts.html',
        providers: [podcast_service_1.PodcastService]
    }), 
    __metadata('design:paramtypes', [podcast_service_1.PodcastService])
], PodcastsComponent);
exports.PodcastsComponent = PodcastsComponent;
//# sourceMappingURL=podcasts.component.js.map