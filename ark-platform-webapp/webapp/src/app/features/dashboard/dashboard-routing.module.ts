import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardLandingContainerComponent } from "./containers/dashboard-landing-container/dashboard-landing-container.component";

const routes: Routes = [
  { path: "", component: DashboardLandingContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
