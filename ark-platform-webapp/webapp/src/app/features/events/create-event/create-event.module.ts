import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiLibModule } from "../../../shared/ui-lib/ui-lib.module";
import { CreateEventRoutingModule } from "./create-event-routing.module";
import { CreateEventContainerComponent } from "./containers/create-event-container/create-event-container.component";
import { CreateEventHeaderComponent } from "./components/create-event-header/create-event-header.component";
import { CreateEventFormComponent } from "./components/create-event-form/create-event-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CreateEventContainerComponent,
    CreateEventHeaderComponent,
    CreateEventFormComponent
  ],
  imports: [
    CommonModule,
    UiLibModule,
    CreateEventRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateEventModule {}
