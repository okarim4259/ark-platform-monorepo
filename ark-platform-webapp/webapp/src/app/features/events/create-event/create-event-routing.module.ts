import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateEventContainerComponent } from "./containers/create-event-container/create-event-container.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [{ path: "", component: CreateEventContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class CreateEventRoutingModule {}
