import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { LoginService } from '../login/login.service';
import { PodcastService } from "../podcast/podcast.service";

@Component ({
  selector: 'profile',
  templateUrl: './app/profile/profile.html',
  providers: [ ProfileService, LoginService, PodcastService ]
})
export class ProfileComponent implements OnInit{
  user: any;
  interests: string;
  formData: any = {};
  bookmarked: any[] = [];
  selection: string;

  constructor(private profileService: ProfileService,
              private loginService: LoginService,
              private podcastService: PodcastService) {}

  ngOnInit() {
    const that = this;

    let success = function (user: any) {
      that.user = user;
      if(user.interests instanceof Array) {
        that.interests = user.interests.toString();
      }
    };

    this.profileService.getProfile(this.loginService.getToken()).then(success);

    let bookSuccess = function (marked: any) {
      let other = that;

      let pSuccess = function (pcast: any) {
        other.bookmarked.push(pcast);
      };

      for(let id of marked) {
        console.log("Podcast ID: " + id);
        that.podcastService.getPodcastFromID(id).then(pSuccess);
      }
    };

    this.profileService.getBookmarksPromise(this.loginService.getToken())
      .then(bookSuccess);
  }

  updateProfile() {
    if(typeof(this.formData.interests) === "string") {
      this.formData.interests = this.formData.interests.split(",");
    }
    this.profileService.updateProfile(this.formData, this.loginService.getToken());
  }

  removeBookmarkedPodcast() {

  }
}