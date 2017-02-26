import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { MaterialDesignLiteDirective } from "./shared/directives/material-design-lite.directive";
import { AppComponent } from "./app.component";
import { ArticleCardComponent } from "./blog/article-card/article-card.component";
import { ArticleDataService } from "./blog/shared/article-data.service";
import { BlogComponent } from "./blog/blog.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TeamComponent } from "./team/team.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EventsComponent } from "./events/events.component";
import { UltimateComponent } from "./ultimate/ultimate.component";
import { MediaComponent } from "./media/media.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AboutTeamComponent } from "./team/about-team/about-team.component";
import { CalendarComponent } from "./team/calendar/calendar.component";
import { RosterComponent } from "./team/roster/roster.component";
import { AchievmentsComponent } from "./team/achievments/achievments.component";
import { TrainingsComponent } from "./team/trainings/trainings.component";


const appRoutes: Routes = [
  { path: "blog", component: BlogComponent },
  { path: "team", component: TeamComponent },
  { path: "events", component: EventsComponent },
  { path: "achievments", component: AchievmentsComponent },
  { path: "ultimate", component: UltimateComponent },
  { path: "media", component: MediaComponent },
  {
    path: "",
    redirectTo: "/blog",
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MaterialDesignLiteDirective,
    BlogComponent,
    NavbarComponent,
    TeamComponent,
    PageNotFoundComponent,
    EventsComponent,
    AchievmentsComponent,
    UltimateComponent,
    MediaComponent,
    ArticleCardComponent,
    SidebarComponent,
    AboutTeamComponent,
    CalendarComponent,
    RosterComponent,
    AchievmentsComponent,
    TrainingsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ArticleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
