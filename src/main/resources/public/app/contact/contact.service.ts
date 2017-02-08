import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { contentHeaders } from '../common/httpHeaders';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

    constructor(private http: Http) {}

    getContactInformation(): Promise<any> {
        return this.http.get("/mentors")
        //return this.http.get("http://localhost:8080/mentors", { headers: contentHeaders })
        //return this.http.get("https://api.slack.com/api/api.test")
            .toPromise()
            //.then(function(res){console.log(res)})
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): PromiseLike<any> {
        console.error('An error occurred', error); // TODO: Remove this for production
        return Promise.reject(error.message || error);
    }
}