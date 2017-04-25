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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const router_1 = require('@angular/router');
const http_1 = require('@angular/http');
const about_component_1 = require('./about/about.component');
const app_component_1 = require('./app.component');
const contact_component_1 = require('./contact/contact.component');
const filter_1 = require('./filtering/filter');
const home_component_1 = require('./home/home.component');
const login_component_1 = require('./login/login.component');
const login_guard_1 = require('./guards/login.guard');
const podcasts_component_1 = require('./podcast/podcasts.component');
const podcast_component_1 = require('./podcast/podcast.component');
const podcastPage_component_1 = require('./podcast/podcastPage.component');
const addPodcast_component_1 = require('./podcast/addPodcast.component');
const profile_component_1 = require('./profile/profile.component');
const login_service_1 = require('./login/login.service');
const routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'podcasts', component: podcasts_component_1.PodcastsComponent },
    { path: 'podcast/:id', component: podcastPage_component_1.PodcastPageComponent },
    { path: 'podcast/edit/:id', component: podcast_component_1.PodcastComponent },
    { path: 'addPodcast', component: addPodcast_component_1.AddPodcastComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [
            about_component_1.AboutComponent,
            app_component_1.AppComponent,
            contact_component_1.ContactComponent,
            filter_1.FilterPipe,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            podcasts_component_1.PodcastsComponent,
            podcast_component_1.PodcastComponent,
            podcastPage_component_1.PodcastPageComponent,
            addPodcast_component_1.AddPodcastComponent,
            profile_component_1.ProfileComponent
        ],
        providers: [login_service_1.LoginService, login_guard_1.LoginGuard],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map