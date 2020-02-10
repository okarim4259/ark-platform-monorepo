import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeLandingContainerComponent } from "./containers/home-landing-container/home-landing-container.component";

const routes: Routes = [{ path: "", component: HomeLandingContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
