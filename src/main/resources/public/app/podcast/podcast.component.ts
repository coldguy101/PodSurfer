import { Component } from '@angular/core';
import { PodcastService } from './podcast.service';

@Component ({
  selector: 'podcast',
  templateUrl: './app/podcast/podcast.html',
  providers: [ PodcastService ]
})
export class PodcastComponent {
  message = "Podcast Component";
}