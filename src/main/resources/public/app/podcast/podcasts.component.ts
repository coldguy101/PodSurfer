import { Component, OnInit } from '@angular/core';
import { PodcastService } from './podcast.service';

@Component ({
  selector: 'podcast',
  templateUrl: './app/podcast/podcasts.html',
  providers: [ PodcastService ]
})
export class PodcastsComponent implements OnInit{
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

  rmPodcast(pcast: any) {
    delete this.podcasts[this.podcasts.indexOf(pcast)];
    this.podcastService.rmPodcast(pcast._id);
  }
}