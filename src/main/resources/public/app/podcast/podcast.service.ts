import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PodcastService {

  constructor(private http: Http) {}

  getContactInformation(): Promise<any> {
    return this.http.get("/podcasts")
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): PromiseLike<any> {
    console.error('An error occurred', error); // TODO: Remove this for production
    return Promise.reject(error.message || error);
  }
}