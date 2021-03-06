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
const review_service_1 = require('./review.service');
const login_service_1 = require("../login/login.service");
const profile_service_1 = require('../profile/profile.service');
let PodcastPageComponent = class PodcastPageComponent {
    constructor(podcastService, reviewService, loginService, profileService, route) {
        this.podcastService = podcastService;
        this.reviewService = reviewService;
        this.loginService = loginService;
        this.profileService = profileService;
        this.route = route;
        this.reviews = [];
        this.newReview = {};
        this.reviewCreateSuccess = false;
        this.reviewCreatePressed = false;
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.podID = params['id'];
            this.newReview = {
                'podcast': this.podID,
                'spoilers': false
            };
            const that = this;
            let podSuccess = function (pod) {
                that.podcast = pod;
            };
            let revSuccess = function (reviews) {
                that.reviews = reviews;
                console.log(reviews);
            };
            let profSuccess = function (profile) {
                that.userID = profile._id;
            };
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.profileService.getProfile(this.loginService.getToken()).then(profSuccess);
            this.podcastService.getPodcastFromID(this.podID).then(podSuccess);
            this.reviewService.getReviewsForPodcast(this.podID).then(revSuccess);
        });
    }
    createReview() {
        console.log(this.newReview);
        this.reviewService.createNewReview(this.newReview).subscribe(res => {
            console.log(res);
            if (res) {
                this.reviews.push(res);
                this.reviewCreateSuccess = true;
                this.reviewCreatePressed = true;
            }
        }, error => {
            console.log(error);
            this.reviewCreatePressed = true;
        });
    }
    deleteReview(id) {
        this.reviewService.deleteReview(id);
        this.reviews = this.reviews.filter(item => item._id !== id);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
PodcastPageComponent = __decorate([
    core_1.Component({
        selector: 'podcastPage',
        templateUrl: './app/podcast/podcastPage.html',
        styleUrls: ['./app/podcast/podcastPage.css'],
        host: {
            'style': 'margin-bottom: 0'
        },
        providers: [podcast_service_1.PodcastService, review_service_1.ReviewService, login_service_1.LoginService, profile_service_1.ProfileService]
    }), 
    __metadata('design:paramtypes', [podcast_service_1.PodcastService, review_service_1.ReviewService, login_service_1.LoginService, profile_service_1.ProfileService, router_1.ActivatedRoute])
], PodcastPageComponent);
exports.PodcastPageComponent = PodcastPageComponent;
//# sourceMappingURL=podcastPage.component.js.map