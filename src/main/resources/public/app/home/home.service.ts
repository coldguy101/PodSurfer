import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

    constructor(private http: Http) {}

    getZen(): Promise<any> {
        return this.http.get("https://api.github.com/zen")
        //return this.http.get("https://api.slack.com/api/api.test")
            .toPromise()
            .then((res: any) => res.text())
            .catch(this.handleError);
    }

    private handleError(error: any): PromiseLike<any> {
        console.error('An error occurred', error); // TODO: Remove this for production
        return Promise.reject(error.message || error);
    }
}