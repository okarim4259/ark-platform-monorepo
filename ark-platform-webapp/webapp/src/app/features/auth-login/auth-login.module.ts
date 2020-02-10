import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginLandingContainerComponent } from "./containers/login-landing-container/login-landing-container.component";
import { SignUpLandingContainerComponent } from "./containers/sign-up-landing-container/sign-up-landing-container.component";
import { LoginFormComponent } from "./login/components/login-form/login-form.component";
import { SignUpFormComponent } from "./signup/components/sign-up-form/sign-up-form.component";
import { AuthLoginRoutingModule } from "./auth-login-routing.module";

@NgModule({
  declarations: [
    LoginLandingContainerComponent,
    SignUpLandingContainerComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [CommonModule, AuthLoginRoutingModule]
})
export class AuthLoginModule {}
