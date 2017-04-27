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
const router_1 = require('@angular/router');
const podcast_service_1 = require('./podcast.service');
const login_service_1 = require("../login/login.service");
const forms_1 = require('@angular/forms');
let PodcastComponent = class PodcastComponent {
    constructor(podcastService, loginService, route) {
        this.podcastService = podcastService;
        this.loginService = loginService;
        this.route = route;
        this.currentEpisode = {};
        this.formData = {
            'episodes': [{}]
        };
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.podID = params['id'];
            const that = this;
            let success = function (pod) {
                that.podcast = pod;
                if (pod.episodes.length > 0)
                    that.formData.episodes = pod.episodes;
            };
            this.podcastService.getPodcastFromID(this.podID).then(success);
            this.isLoggedIn = this.loginService.isLoggedIn();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    updatePodcast() {
        console.log("Update to: " + this.formData);
        this.podcastService.updatePodcast(this.formData, this.podID);
    }
    makeNewEpisode() {
        let max = 0;
        for (let episode of this.formData.episodes) {
            if (episode.number > max) {
                max = episode.number;
            }
        }
        this.formData.episodes.push({
            'name': 'Name',
            'number': max + 1,
            'review': 'Review',
            'spoilers': false
        });
    }
    editEpisode(episode) {
        this.currentEpisode = episode;
    }
    insertEpisode() {
        console.log("BEFORE: " + this.formData.episodes);
        for (let index in this.formData.episodes) {
            console.log("Looped on: " + index);
            if (this.formData.episodes[index].number === this.currentEpisode.number) {
                this.formData.episodes[index].name = this.currentEpisode.name;
                this.formData.episodes[index].description = this.currentEpisode.description;
                this.formData.episodes[index].link = this.currentEpisode.link;
                break;
            }
        }
        console.log("AFTER: " + this.formData.episodes);
        this.updatePodcast();
    }
};
PodcastComponent = __decorate([
    core_1.Component({
        selector: 'podcast',
        templateUrl: './app/podcast/podcast.html',
        providers: [podcast_service_1.PodcastService, login_service_1.LoginService, forms_1.FormsModule]
    }), 
    __metadata('design:paramtypes', [podcast_service_1.PodcastService, login_service_1.LoginService, router_1.ActivatedRoute])
], PodcastComponent);
exports.PodcastComponent = PodcastComponent;
//# sourceMappingURL=podcast.component.js.map