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
    'episodes': []
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
        if(pod.episodes.length > 0)
          that.formData.episodes = pod.episodes;
      };

      this.podcastService.getPodcastFromID(this.podID).then(success);
      this.isLoggedIn = this.loginService.isLoggedIn();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updatePodcast() {
    // if(typeof(this.formData.interests) === "string") {
    //   this.formData.interests = this.formData.interests.split(",");
    // }
    console.log("Update to: " + this.formData);
    this.podcastService.updatePodcast(this.formData, this.podID);
  }

  makeNewEpisode() {
    console.log("got here...");
    let max = 0;
    for(let episode of this.formData.episodes) {
      if(episode.number > max) {
        max = episode.number;
      }
    }
    if (max === 0) {
      this.formData.episodes = [{
        'name':'Name',
        'number': max + 1,
        'review': 'Review',
        'spoilers': false
      }]
    } else {
      this.formData.episodes.push({
        'name': 'Name',
        'number': max + 1,
        'review': 'Review',
        'spoilers': false
      });
    }
    this.formData.episodes = this.formData.episodes.filter((res: any) => res);
    console.log(this.formData.episodes.length);
  }

  editEpisode(episode: any) {
    this.currentEpisode = episode;
  }

  insertEpisode() {
    console.log("BEFORE: " + this.formData.episodes);
    for(let index in this.formData.episodes) {
      console.log("Looped on: " + index);
      if(this.formData.episodes[index].number === this.currentEpisode.number) {
        this.formData.episodes[index].name = this.currentEpisode.name;
        this.formData.episodes[index].description = this.currentEpisode.description;
        this.formData.episodes[index].link = this.currentEpisode.link;
        break;
      }
    }
    console.log("AFTER: " + this.formData.episodes);
    this.updatePodcast();
  }
}