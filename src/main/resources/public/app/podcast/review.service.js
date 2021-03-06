"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const login_service_1 = require('../login/login.service');
require('rxjs/add/operator/toPromise');
let ReviewService = class ReviewService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
    }
    createNewReview(data) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + this.loginService.getToken());
        let body = this.encode(data);
        console.log(body);
        return this.http
            .post('/api/review/create', body, { headers: headers })
            .map(res => res.json())
            .map(res => {
            console.log("Review Service Res: " + res);
            return res;
        });
    }
    deleteReview(id) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + this.loginService.getToken());
        let options = new http_1.RequestOptions({ headers: headers });
        console.log("ID to del: " + id);
        console.log("url: /api/review/delete/" + id);
        this.http.delete('/api/review/delete/' + id, options).subscribe(res => {
            console.log(res);
        });
    }
    getReviewsForPodcast(podcastID) {
        return this.http.get("/api/review/reviewForPod/" + podcastID)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    updateReview(podcastID, review) {
        console.log(podcastID);
        let headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + this.loginService.getToken());
        return this.http.put("/api/review/update/" + podcastID, review, { headers: headers })
            .subscribe(res => {
            console.log(res);
        });
    }
    encode(src) {
        let u = encodeURIComponent;
        var urljson = "";
        var keys = Object.keys(src);
        for (var i = 0; i < keys.length; i++) {
            urljson += u(keys[i]) + "=" + u(src[keys[i]]);
            if (i < (keys.length - 1))
                urljson += "&";
        }
        return urljson;
    }
    handleError(error) {
        console.error('An error occurred retrieving podcasts', error);
        return Promise.reject(error.message || error);
    }
};
ReviewService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, login_service_1.LoginService])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map