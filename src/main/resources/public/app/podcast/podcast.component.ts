import { Component, OnInit, Input } from '@angular/core';
import { PodcastService } from './podcast.service';

@Component ({
  selector: 'podcast',
  templateUrl: './app/podcast/podcast.html',
  providers: [ PodcastService]
})
export class PodcastComponent implements OnInit{
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
}