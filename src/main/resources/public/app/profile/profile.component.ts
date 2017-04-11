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
  bookmarked: any;
  selection: string;

  constructor(private profileService: ProfileService, private loginService: LoginService) {}

  ngOnInit() {
    const that = this;

    let success = function (user: any) {
      that.user = user;
    };

    this.profileService.getProfile(this.loginService.getToken()).then(success);
  }

  updateProfile() {
    //this.profileService.updateProfile(user);
  }

  updateBookmarked() {

  }

  removeBookmarkedPodcast() {

  }
}