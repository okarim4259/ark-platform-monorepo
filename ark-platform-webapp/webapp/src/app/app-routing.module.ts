import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "home", loadChildren: "./features/home/home.module#HomeModule" },
  {
    path: "auth",
    loadChildren: "./features/auth-login/auth-login.module#AuthLoginModule"
  },
  {
    path: "dashboard",
    loadChildren: "./features/dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
