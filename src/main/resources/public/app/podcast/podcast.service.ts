import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PodcastService {

  constructor(private http: Http) {}

  getAllPodcasts(): Promise<any> {
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