import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from './podcast.service';
import { ReviewService } from './review.service';
import { LoginService } from "../login/login.service";

@Component ({
  selector: 'podcastPage',
  templateUrl: './app/podcast/podcastPage.html',
  styleUrls: ['./app/podcast/podcastPage.css'],
  providers: [ PodcastService, ReviewService, LoginService ]
})
export class PodcastPageComponent implements OnInit, OnDestroy{
  podID: string;
  podcast: any;
  reviews: any[];
  newReview: Object = {};
  isLoggedIn: boolean;
  private subscription: any;

  constructor(private podcastService: PodcastService,
              private reviewService: ReviewService,
              private loginService: LoginService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.podID = params['id']; // (+) converts string 'id' to a number (would be useful someday but not today...

      const that = this;
      let podSuccess = function(pod: any) {
        that.podcast = pod;
      };

      let revSuccess = function(reviews: any[]) {
        that.reviews = reviews;
      };

      this.podcastService.getPodcastFromID(this.podID).then(podSuccess);
      this.reviewService.getReviewsForPodcast(this.podID).then(revSuccess);
      this.isLoggedIn = this.loginService.isLoggedIn();


    });
  }

  createReview() {

  }

  checkCompleteness() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}