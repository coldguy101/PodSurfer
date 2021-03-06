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
require('rxjs/add/operator/toPromise');
let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getProfile(token) {
        let headers = new http_1.Headers();
        console.log('Bearer ' + token);
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.get("/api/user/me", { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    updateProfile(profile, token) {
        console.log(profile);
        let headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.put("/api/user/update", profile, { headers: headers })
            .subscribe(res => {
            console.log(res);
        });
    }
    getBookmarks(token) {
        let that = this;
        let success = function (values) {
            that.bookmarks = values.bookmarks;
        };
        this.getProfile(token).then(success);
        return this.bookmarks;
    }
    getBookmarksPromise(token) {
        return this.getProfile(token).then(res => res.bookmarks);
    }
    addBookmark(id, token) {
        this.bookmarks.push(id);
        this.updateProfile({ bookmarks: this.bookmarks }, token);
    }
    removeBookmark(id, token) {
        let index = this.bookmarks.indexOf(id);
        if (index !== -1) {
            if (index > -1) {
                this.bookmarks.splice(index, 1);
            }
        }
        this.updateProfile({ bookmarks: this.bookmarks }, token);
    }
    isPodcastBookmarked(id, token) {
        return this.bookmarks.indexOf(id) !== -1;
    }
    handleError(error) {
        console.error('An error occurred retrieving user data', error);
        return Promise.reject(error.message || error);
    }
};
ProfileService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map