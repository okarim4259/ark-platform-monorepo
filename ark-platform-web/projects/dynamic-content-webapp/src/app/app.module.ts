import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DynamicContentLibModule } from "../../../dynamic-content-lib/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DynamicContentLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
