import { Component, DoCheck, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { PodcastService } from "../podcast/podcast.service";
import { LoginService } from '../login/login.service';

@Component ({
    selector: 'home',
    templateUrl: './app/home/home.html',
    styleUrls: ['./app/home/home.css'],
    providers: [ HomeService, PodcastService ]
})
export class HomeComponent implements OnInit, DoCheck {

    welcome: string;
    recommendedPodcasts: any;
    search: string;
    zen: string;
    loggedIn: boolean;

    constructor(private homeService: HomeService, private podcastService: PodcastService, private loginService: LoginService) {
        this.welcome = "Search for Podcasts!";
        this.zen = "Temporary";
    }

    ngOnInit() {
        this.loggedIn = this.loginService.isLoggedIn();
        this.renderPodcasts();
    }

    ngDoCheck() {
        // if(this.loggedIn !== this.loginService.isLoggedIn()) {
        //     this.renderPodcasts();
        // }
    }

    renderPodcasts() {
        let that = this;

        let success = function (podcasts: any) {
            that.recommendedPodcasts = podcasts;
        };

        if(this.loginService.isLoggedIn())
            this.podcastService.getMyRecommendedPodcasts().then(success);
        else
            this.podcastService.getAllPodcasts().then(success);
    }

    /*ngOnInit() {
        this.getZen();
    }

    getZen() {
        let that = this;

        let success = function(theZen: string) {
            that.zen = theZen;
        };

        this.homeService.getZen().then(success);
    }*/
}