import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {LoginService} from '../login/login.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReviewService {

  constructor(private http: Http, private loginService: LoginService) {}

  createNewReview(data: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + this.loginService.getToken());

    let body = this.encode(data);

    console.log(body);

    return this.http
      .post('/api/review/create', /*JSON.stringify({email, password})*/ body, {headers: headers})
      .map(res => res.json())
      .map(res => {
        console.log("Review Service Res: " + res);
        return res;
      });
  }

  deleteReview(id: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + this.loginService.getToken());
    let options = new RequestOptions({ headers: headers });
    //console.log("Headers: " + headers);
    console.log("ID to del: " + id);
    console.log("url: /api/review/delete/" + id);

    this.http.delete('/api/review/delete/' + id, options).subscribe(res => {
      console.log(res);
    });
  }

  getReviewsForPodcast(podcastID: string) {
    return this.http.get("/api/review/reviewForPod/" + podcastID)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  updateReview(podcastID: string, review: any) {
    console.log(podcastID);
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.loginService.getToken());
    return this.http.put("/api/review/update/" + podcastID, review, { headers: headers })
      .subscribe(res => {
        console.log(res);
      });
  }

  private encode(src: any) {
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