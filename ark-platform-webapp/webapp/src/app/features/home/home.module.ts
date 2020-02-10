import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeLandingContainerComponent } from "./containers/home-landing-container/home-landing-container.component";
import { HomeLandingHeroComponent } from "./components/home-landing-hero/home-landing-hero.component";
import { HomeRoutingModule } from "./home-routing.module";
import { UiLibModule } from "../../shared/ui-lib/ui-lib.module";
import { HomePopularActivitivesComponent } from "./components/home-popular-activitives/home-popular-activitives.component";
import { HomeRecentNewsComponent } from "./components/home-recent-news/home-recent-news.component";
import { HomeHowItWorksComponent } from "./components/home-how-it-works/home-how-it-works.component";

@NgModule({
  declarations: [
    HomeLandingContainerComponent,
    HomeLandingHeroComponent,
    HomePopularActivitivesComponent,
    HomeRecentNewsComponent,
    HomeHowItWorksComponent
  ],
  imports: [CommonModule, UiLibModule, HomeRoutingModule]
})
export class HomeModule {}
