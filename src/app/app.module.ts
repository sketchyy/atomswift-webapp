import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignLiteDirective } from './shared/directives/material-design-lite.directive';
import { AppComponent } from './app.component';

import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventsComponent } from './events/events.component';
import { AchievmentsComponent } from './achievments/achievments.component';
import { UltimateComponent } from './ultimate/ultimate.component';
import { MediaComponent } from './media/media.component';

const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'team', component: TeamComponent },
  { path: 'events', component: EventsComponent },
  { path: 'achievments', component: AchievmentsComponent },
  { path: 'ultimate', component: UltimateComponent },
  { path: 'media', component: MediaComponent },
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MaterialDesignLiteDirective,
    BlogComponent,
    HeaderComponent,
    TeamComponent,
    PageNotFoundComponent,
    EventsComponent,
    AchievmentsComponent,
    UltimateComponent,
    MediaComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
