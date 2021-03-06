import { Component, OnInit } from '@angular/core';
import { PodcastService } from './podcast.service';
import { LoginService } from "../login/login.service";
import { ProfileService } from "../profile/profile.service";

@Component ({
  selector: 'podcast',
  templateUrl: './app/podcast/podcasts.html',
  providers: [ PodcastService, LoginService, ProfileService ]
})
export class PodcastsComponent implements OnInit{
  podcasts: any;
  loggedIn: boolean = false;
  bookmarked: string;

  constructor(private podcastService: PodcastService,
              private loginService: LoginService,
              private profileService: ProfileService) {}

  ngOnInit() {
    const that = this;

    let success = function (podcasts: any) {
      that.podcasts = podcasts;
    };

    this.loggedIn = this.loginService.isLoggedIn();

    if(this.loggedIn)
      this.profileService.getBookmarks(this.loginService.getToken());

    this.podcastService.getAllPodcasts().then(success);

    //if(this.loggedIn)
      //this.profileService.getBookmarks(this.loginService.getToken()); //Must call once :/
          //This is made incorrectly and will fail if the podcasts load before the callback finishes for this.
    // if(this.loggedIn)
    //   this.profileService.getBookmarksPromise(this.loginService.getToken()).then(res => this.bookmarked = res);
  }

  rmPodcast(pcast: any) {
    // delete this.podcasts[this.podcasts.indexOf(pcast)];
    // this.podcastService.rmPodcast(pcast._id);
    if (confirm('Are you sure you want to delete this Podcast?')) {
      this.podcastService.rmPodcast(pcast._id);
      this.podcasts = this.podcasts.filter((cast: any) => cast._id !== pcast._id);
    } else {
      // Do nothing!
    }
  }

  favoritePodcast(podID: string) {
    this.profileService.addBookmark(podID, this.loginService.getToken());
  }

  unFavoritePodcast(podID: string) {
    this.profileService.removeBookmark(podID, this.loginService.getToken());
  }

  isPodcastFavorited(podID: string): boolean {
    return this.profileService.isPodcastBookmarked(podID, this.loginService.getToken());
  }
}