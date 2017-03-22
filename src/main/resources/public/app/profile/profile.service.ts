import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {}

  getProfile(token: string): Promise<any> {
    /*return Promise.resolve(
      {
        "_id": "012345678912",
        "name": "Kelleigh Laine",
        "email": "kelleigh.maroney@gmail.com",
        "interests": ["technology", "politics"],
        "bookmarks": ["123456789123", "234567891234"]
      }
    );*/
    let headers: Headers = new Headers();
    console.log('Bearer ' + token);
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get("/api/user/me", { headers: headers })
      .toPromise()
      //.then(function(res){console.log(res)})
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): PromiseLike<any> {
    console.error('An error occurred retrieving user data', error); // TODO: Remove this for production
    return Promise.reject(error.message || error);
  }
}