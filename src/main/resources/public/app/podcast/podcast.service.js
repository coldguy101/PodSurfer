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
let PodcastService = class PodcastService {
    constructor(http) {
        this.http = http;
    }
    getAllPodcasts() {
        return Promise.resolve([
            {
                name: "Sean's podcast",
                link: "here",
                description: "This podcast is about the life of a computer programmer named sean lavoie. He is pretty legit.",
                episodes: [""],
                tags: ["I dont understand why you so cold to me"],
                imageURL: "google.com"
            },
            {
                name: "Kate's podcast",
                link: "here",
                description: "A girl named Kate. She is phrophectionoal rightaing majoir. She likes cool stuff and to lick lollypops.",
                episodes: [""],
                tags: ["I dont understand why you so cold to me"],
                imageURL: "google.com"
            },
            {
                name: "Life's battles",
                link: "here",
                description: "Life sucks sometimes doesnt it? Well this podcast is here for you.",
                episodes: [""],
                tags: ["I dont understand why you so cold to me"],
                imageURL: "google.com"
            },
            {
                name: "The Airplane",
                link: "here",
                description: "A story about the origins of the magical flying metal bird.",
                episodes: [""],
                tags: ["flying"],
                imageURL: "google.com"
            },
            {
                name: "My ovaries hurt",
                link: "here",
                description: "A girl starts her period at the age of 6! Her story!.",
                episodes: [""],
                tags: ["I dont understand why you so cold to me"],
                imageURL: "google.com"
            },
            {
                name: "Over and above",
                link: "here",
                description: "The story of the death of a procrastinator.",
                episodes: [""],
                tags: ["Pain", "suffering"],
                imageURL: "google.com"
            },
            {
                name: "The tennis ball",
                link: "here",
                description: "How do you properly hit a tennis ball???? We'll teach you how!",
                episodes: [""],
                tags: ["fun", "tennis", "sports"],
                imageURL: "google.com"
            }
        ]);
    }
    handleError(error) {
        console.error('An error occurred retrieving podcasts', error);
        return Promise.reject(error.message || error);
    }
};
PodcastService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], PodcastService);
exports.PodcastService = PodcastService;
//# sourceMappingURL=podcast.service.js.map