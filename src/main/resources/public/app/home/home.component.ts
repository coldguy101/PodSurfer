import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component ({
    selector: 'home',
    templateUrl: './app/home/home.html',
    providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

    welcome: string;
    zen: string;

    constructor(private homeService: HomeService) {
        this.welcome = "Hello There!";
        this.zen = "Temporary";
    }

    ngOnInit() {
        this.getZen();
    }

    getZen() {
        let that = this;
        let success = function(theZen: string) {
            that.zen = theZen;
        };

        this.homeService.getZen().then(success);
    }
}