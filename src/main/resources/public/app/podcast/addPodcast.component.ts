import { Component, OnInit } from '@angular/core';
import { PodcastService } from './podcast.service';
import { Router } from "@angular/router";

@Component ({
  selector: 'addPodcast',
  templateUrl: './app/podcast/addPodcast.html',
  providers: [ PodcastService ]
})
export class AddPodcastComponent implements OnInit{
  inputData: any = {};
  curPodcasts: any;

  constructor(private podcastService: PodcastService, private router: Router) {}

  ngOnInit() {
    /*const that = this;

    let success = function (podcasts: any) {
      that.curPodcasts = podcasts;          //TODO Later we need to check if podcast with same name already exists...
    };

    this.podcastService.getAllPodcasts().then(success);*/
  }

  addPodcast() {
    //Adds podcast and redirects you to the podcast page when you are finished.
    this.podcastService.addPodcast(this.inputData).subscribe(
      res => {
        console.log(res);
        if (res) {
          this.router.navigate(['/podcast/' + res._id]);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}