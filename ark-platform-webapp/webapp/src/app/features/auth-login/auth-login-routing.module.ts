import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginLandingContainerComponent } from "./containers/login-landing-container/login-landing-container.component";
import { SignUpLandingContainerComponent } from "./containers/sign-up-landing-container/sign-up-landing-container.component";

const routes: Routes = [
  { path: "login", component: LoginLandingContainerComponent },
  { path: "signup", component: SignUpLandingContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLoginRoutingModule {}
