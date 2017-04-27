/**
 * Created by sean on 3/4/17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from './podcast.service';
import { LoginService } from "../login/login.service";
import { FormsModule } from '@angular/forms';

@Component ({
  selector: 'podcast',
  templateUrl: './app/podcast/podcast.html',
  providers: [ PodcastService, LoginService, FormsModule ]
})
export class PodcastComponent implements OnInit, OnDestroy{
  podID: string;
  podcast: any;
  currentEpisode: any = {};
  formData: any = {
    'episodes': [{}]
  };
  isLoggedIn: boolean;
  private subscription: any;

  constructor(private podcastService: PodcastService,
              private loginService: LoginService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.podID = params['id']; // (+) converts string 'id' to a number (would be useful someday but not today...

      const that = this;
      let success = function (pod: any) {
        that.podcast = pod;
        if(pod.episodes)
          that.formData.episodes = pod.episodes;
      };

      this.podcastService.getPodcastFromID(this.podID).then(success);
      this.isLoggedIn = this.loginService.isLoggedIn();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editPodcast() {
    console.log(this.formData);
  }

  editEpisode(episode: any) {
    this.currentEpisode = episode;
  }

  saveEpisode() {
    for(let index in this.formData.episodes) {
      if(this.formData.episodes[index].number === this.currentEpisode.number) {
        this.formData.episodes[index].name = this.currentEpisode.name;
        this.formData.episodes[index].description = this.currentEpisode.description;
        this.formData.episodes[index].link = this.currentEpisode.link;
        return;
      }
    }
  }
}