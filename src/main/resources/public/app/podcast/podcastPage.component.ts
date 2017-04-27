import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from './podcast.service';
import { ReviewService } from './review.service';
import { LoginService } from "../login/login.service";

@Component ({
  selector: 'podcastPage',
  templateUrl: './app/podcast/podcastPage.html',
  //encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app/podcast/podcastPage.css'],
  host: {
    'style': 'margin-bottom: 0'
  },
  providers: [ PodcastService, ReviewService, LoginService ]
})
export class PodcastPageComponent implements OnInit, OnDestroy{
  podID: string;
  podcast: any;
  reviews: any[];
  newReview: Object = {};
  reviewCreateSuccess: boolean = false;
  reviewCreatePressed: boolean = false;
  isLoggedIn: boolean;
  private subscription: any;

  constructor(private podcastService: PodcastService,
              private reviewService: ReviewService,
              private loginService: LoginService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.podID = params['id']; // (+) converts string 'id' to a number (would be useful someday but not today...
      this.newReview = {
        'podcast': this.podID
      };

      const that = this;
      let podSuccess = function(pod: any) {
        that.podcast = pod;
      };

      let revSuccess = function(reviews: any[]) {
        that.reviews = reviews;
        console.log(reviews);
      };

      this.podcastService.getPodcastFromID(this.podID).then(podSuccess);
      this.reviewService.getReviewsForPodcast(this.podID).then(revSuccess);
      this.isLoggedIn = this.loginService.isLoggedIn();

    });
  }

  createReview() {
    console.log(this.newReview);
    this.reviewService.createNewReview(this.newReview).subscribe(
      res => {
        console.log(res);
        if (res) {
          this.reviews.push(res);
          this.reviewCreateSuccess = true;
          this.reviewCreatePressed = true;
        }
      },
    error => {
      console.log(error);
      this.reviewCreatePressed = true;
    });
  }


  checkCompleteness() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}