import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component ({
  selector: 'profile',
  templateUrl: './app/profile/profile.html',
  providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit{
  user ={
    "_id": "012345678912",
    "name": "Kelleigh Laine",
    "email": "kelleigh.maroney@gmail.com",
    "interests": ["technology", "politics"],
    "bookmarks": ["123456789123", "234567891234"]
  };
  message = "Welcome";
  selection: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    const that = this;

    let success = function (user: any) {
      that.user = user;
    };

    this.profileService.getMyProfile().then(success);
  }
}