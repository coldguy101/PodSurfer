import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from './podcast.service';
import { ReviewService } from './review.service';
import { LoginService } from "../login/login.service";
import { ProfileService } from '../profile/profile.service';

@Component ({
  selector: 'podcastPage',
  templateUrl: './app/podcast/podcastPage.html',
  //encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app/podcast/podcastPage.css'],
  host: {
    'style': 'margin-bottom: 0'
  },
  providers: [ PodcastService, ReviewService, LoginService, ProfileService ]
})
export class PodcastPageComponent implements OnInit, OnDestroy{
  podID: string;
  podcast: any;
  reviews: any[] = [];
  newReview: Object = {};
  reviewCreateSuccess: boolean = false;
  reviewCreatePressed: boolean = false;
  isLoggedIn: boolean;
  userID: string;
  private subscription: any;

  constructor(private podcastService: PodcastService,
              private reviewService: ReviewService,
              private loginService: LoginService,
              private profileService: ProfileService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.podID = params['id']; // (+) converts string 'id' to a number (would be useful someday but not today...
      this.newReview = {
        'podcast': this.podID,
        'spoilers': false
      };

      const that = this;
      let podSuccess = function(pod: any) {
        that.podcast = pod;
      };

      let revSuccess = function(reviews: any[]) {
        that.reviews = reviews;
        console.log(reviews);
      };

      let profSuccess = function(profile: any) {
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

  deleteReview(id: string) {
    this.reviewService.deleteReview(id);
    this.reviews = this.reviews.filter(item => item._id !== id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}