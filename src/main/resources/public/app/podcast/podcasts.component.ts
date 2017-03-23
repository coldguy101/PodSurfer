import { Component, OnInit } from '@angular/core';
import { PodcastService } from './podcast.service';

@Component ({
  selector: 'podcast',
  templateUrl: './app/podcast/podcasts.html',
  providers: [ PodcastService ]
})
export class PodcastsComponent implements OnInit{
  message = "All your swanky podcasts are here:";
  podcasts: any;
  selection: string;

  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    const that = this;

    let success = function (podcasts: any) {
      that.podcasts = podcasts;
    };

    this.podcastService.getAllPodcasts().then(success);
  }

  rmPodcast(id: string) {
    console.log("RmPodcast Pushed on ID: " + id);
    delete this.podcasts[id];
    this.podcastService.rmPodcast(id);
  }
}