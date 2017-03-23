import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {LoginService} from '../login/login.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PodcastService {

  constructor(private http: Http, private loginService: LoginService) {}

  getPodcastFromID(id: string) {
    return this.http.get("/api/podcast/get/" + id)
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
    return this.http.get("/api/podcast/all")
      .toPromise()
      //.then(function(res){console.log(res)})
      .then(res => res.json())
      .catch(this.handleError);
  }

  addPodcast(data: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + this.loginService.getToken());

    let body = this.encode(data);

    console.log(body);

    return this.http
      .post('/api/podcast/create', /*JSON.stringify({email, password})*/ body, {headers: headers})
      .map(res => res.json())
      .map(res => {
        console.log("Podcast Service Res: " + res);
        return res;
      });
  }

  rmPodcast(id: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + this.loginService.getToken());
    console.log("Headers: " + headers);
    console.log("ID to del: " + id);
    return this.http
      .delete('/api/podcast/delete/' + id, {headers: headers})
      .map(res => res.json())
      .map(res => {
        console.log("Podcast Service Delete: " + res);
        return res;
      });
  }

  private encode(src: any){
  let u = encodeURIComponent;
  var urljson = "";
  var keys = Object.keys(src);
  for(var i=0; i <keys.length; i++){
    urljson += u(keys[i]) + "=" + u(src[keys[i]]);
    if(i < (keys.length-1))urljson+="&";
  }
  return urljson;
}

  private handleError(error: any): PromiseLike<any> {
    console.error('An error occurred retrieving podcasts', error); // TODO: Remove this for production
    return Promise.reject(error.message || error);
  }
}