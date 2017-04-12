import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { LoginService } from '../login/login.service';

@Component ({
  selector: 'profile',
  templateUrl: './app/profile/profile.html',
  providers: [ ProfileService, LoginService ]
})
export class ProfileComponent implements OnInit{
  user: any;
  interests: string;
  formData: any = {};
  bookmarked: any;
  selection: string;

  constructor(private profileService: ProfileService, private loginService: LoginService) {}

  ngOnInit() {
    const that = this;

    let success = function (user: any) {
      that.user = user;
      for(let i of user.interests) {
        that.interests += i + ",";
      }
    };

    this.profileService.getProfile(this.loginService.getToken()).then(success);
  }

  updateProfile() {
    if(typeof(this.formData.interests) == "string") {
      this.formData.interests = this.formData.interests.split(",");
    }
    this.profileService.setProfile(this.formData, this.loginService.getToken());
  }

  updateBookmarked() {

  }

  removeBookmarkedPodcast() {

  }
}