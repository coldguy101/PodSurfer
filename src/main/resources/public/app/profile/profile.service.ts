import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  private bookmarks: string[];

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

  updateProfile(profile: any, token: string) {
    console.log(profile);
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.put("/api/user/update", profile, { headers: headers })
     .subscribe(res => {
       console.log(res);
     });
  }

  getBookmarks(token: string): string[] {
    let that = this;

    let success = function(values: any) {
      that.bookmarks = values.bookmarks;
    };

    this.getProfile(token).then(success);

    return this.bookmarks;
  }

  getBookmarksPromise(token: string) {
    return this.getProfile(token).then(res => res.bookmarks)
  }

  addBookmark(id: string, token: string) {
    this.bookmarks.push(id);
    this.updateProfile({bookmarks: this.bookmarks}, token);
  }

  removeBookmark(id: string, token: string) {
    let index = this.bookmarks.indexOf(id);
    if(index !== -1) {
      if (index > -1) {
        this.bookmarks.splice(index, 1);
      }
    }
    //delete this.bookmarks[index];
    this.updateProfile({bookmarks: this.bookmarks}, token);
  }

  isPodcastBookmarked(id: string, token: string) {
    return this.bookmarks.indexOf(id) !== -1;
  }

  private handleError(error: any): PromiseLike<any> {
    console.error('An error occurred retrieving user data', error); // TODO: Remove this for production
    return Promise.reject(error.message || error);
  }
}