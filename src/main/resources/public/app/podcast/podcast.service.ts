import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PodcastService {

  constructor(private http: Http) {}

  getPodcastFromID(id: number) {
    return this.http.get("/api/podcast/" + id)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getAllPodcasts(): Promise<any> {
    // return Promise.resolve([
    //   {
    //     name: "Sean's podcast",
    //     link: "here",
    //     description: "This podcast is about the life of a computer programmer named sean lavoie. He is pretty legit.",
    //     episodes: [""],
    //     tags: ["I dont understand why you so cold to me"],
    //     imageURL: "google.com"
    //   },
    //   {
    //     name: "Kate's podcast",
    //     link: "here",
    //     description: "A girl named Kate. She is phrophectionoal rightaing majoir. She likes cool stuff and to lick lollypops.",
    //     episodes: [""],
    //     tags: ["I dont understand why you so cold to me"],
    //     imageURL: "google.com"
    //   },
    //   {
    //     name: "Life's battles",
    //     link: "here",
    //     description: "Life sucks sometimes doesnt it? Well this podcast is here for you.",
    //     episodes: [""],
    //     tags: ["I dont understand why you so cold to me"],
    //     imageURL: "google.com"
    //   },
    //   {
    //     name: "The Airplane",
    //     link: "here",
    //     description: "A story about the origins of the magical flying metal bird.",
    //     episodes: [""],
    //     tags: ["flying"],
    //     imageURL: "google.com"
    //   },
    //   {
    //     name: "My ovaries hurt",
    //     link: "here",
    //     description: "A girl starts her period at the age of 6! Her story!.",
    //     episodes: [""],
    //     tags: ["I dont understand why you so cold to me"],
    //     imageURL: "google.com"
    //   },
    //   {
    //     name: "Over and above",
    //     link: "here",
    //     description: "The story of the death of a procrastinator.",
    //     episodes: [""],
    //     tags: ["Pain", "suffering"],
    //     imageURL: "google.com"
    //   },
    //   {
    //     name: "The tennis ball",
    //     link: "here",
    //     description: "How do you properly hit a tennis ball???? We'll teach you how!",
    //     episodes: [""],
    //     tags: ["fun", "tennis", "sports"],
    //     imageURL: "google.com"
    //   }
    //   ]);
    return this.http.get("/api/podcasts")
      .toPromise()
      //.then(function(res){console.log(res)})
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): PromiseLike<any> {
    console.error('An error occurred retrieving podcasts', error); // TODO: Remove this for production
    return Promise.reject(error.message || error);
  }
}