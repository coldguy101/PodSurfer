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
let PodcastComponent = class PodcastComponent {
    constructor(podcastService, route) {
        this.podcastService = podcastService;
        this.route = route;
        this.formData = {};
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.podID = params['id'];
            const that = this;
            let success = function (pod) {
                that.podcast = pod;
            };
            this.podcastService.getPodcastFromID(this.podID).then(success);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    editPodcast() {
    }
};
PodcastComponent = __decorate([
    core_1.Component({
        selector: 'podcast',
        templateUrl: './app/podcast/podcast.html',
        providers: [podcast_service_1.PodcastService]
    }), 
    __metadata('design:paramtypes', [podcast_service_1.PodcastService, router_1.ActivatedRoute])
], PodcastComponent);
exports.PodcastComponent = PodcastComponent;
//# sourceMappingURL=podcast.component.js.map