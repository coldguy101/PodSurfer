import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms'
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }             from '@angular/http'

import { AboutComponent }         from './about/about.component';
import { AppComponent }           from './app.component';
import { ContactComponent }       from './contact/contact.component';
import { FilterPipe }             from './filtering/filter';
import { HomeComponent }          from './home/home.component';
import { LoginComponent }         from './login/login.component';
import { PodcastsComponent }       from './podcast/podcasts.component';
import { ProfileComponent }       from "./profile/profile.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'podcasts', component: PodcastsComponent},
  {path: 'profile', component: ProfileComponent}
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  //{
  //    path: 'heroes',
  //    component: HeroListComponent,
  //    data: { title: 'Heroes List' }
  //},
  //{ path: '',
  //    redirectTo: '/heroes',
  //    pathMatch: 'full'
  //},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FilterPipe,
    HomeComponent,
    LoginComponent,
    PodcastsComponent,
    ProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
