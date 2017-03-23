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
const router_1 = require("@angular/router");
let AddPodcastComponent = class AddPodcastComponent {
    constructor(podcastService, router) {
        this.podcastService = podcastService;
        this.router = router;
        this.inputData = {};
    }
    ngOnInit() {
    }
    addPodcast() {
        this.podcastService.addPodcast(this.inputData).subscribe(res => {
            console.log(res);
            if (res) {
                this.router.navigate(['/podcast/' + res._id]);
            }
        }, error => {
            console.log(error);
        });
    }
};
AddPodcastComponent = __decorate([
    core_1.Component({
        selector: 'addPodcast',
        templateUrl: './app/podcast/addPodcast.html',
        providers: [podcast_service_1.PodcastService]
    }), 
    __metadata('design:paramtypes', [podcast_service_1.PodcastService, router_1.Router])
], AddPodcastComponent);
exports.AddPodcastComponent = AddPodcastComponent;
//# sourceMappingURL=addPodcast.component.js.map