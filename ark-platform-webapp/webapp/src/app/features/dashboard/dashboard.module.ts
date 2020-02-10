import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardLandingContainerComponent } from "./containers/dashboard-landing-container/dashboard-landing-container.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [DashboardLandingContainerComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
