/**
 * Created by sean on 3/4/17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from './podcast.service';
import { LoginService } from "../login/login.service";

@Component ({
  selector: 'podcast',
  templateUrl: './app/podcast/podcast.html',
  providers: [ PodcastService, LoginService ]
})
export class PodcastComponent implements OnInit, OnDestroy{
  podID: string;
  podcast: any;
  formData: any = {};
  isLoggedIn: boolean;
  private subscription: any;

  constructor(private podcastService: PodcastService,
              private loginService: LoginService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.podID = params['id']; // (+) converts string 'id' to a number (would be useful someday but not today...

      const that = this;
      let success = function (pod: any) {
        that.podcast = pod;
      };

      this.podcastService.getPodcastFromID(this.podID).then(success);
      this.isLoggedIn = this.loginService.isLoggedIn();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editPodcast() {

  }
}