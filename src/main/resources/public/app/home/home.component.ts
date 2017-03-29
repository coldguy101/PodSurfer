import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { PodcastService } from "../podcast/podcast.service";
import { LoginService } from '../login/login.service';

@Component ({
    selector: 'home',
    templateUrl: './app/home/home.html',
    providers: [ HomeService, PodcastService ]
})
export class HomeComponent implements OnInit {

    welcome: string;
    recommendedPodcasts: any;
    search: string;
    zen: string;

    constructor(private homeService: HomeService, private podcastService: PodcastService, private loginService: LoginService) {
        this.welcome = "Search for Podcasts!";
        this.zen = "Temporary";
    }

    ngOnInit() {
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