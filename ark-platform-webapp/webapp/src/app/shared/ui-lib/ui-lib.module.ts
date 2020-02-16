import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { MatSliderModule } from "@angular/material/slider";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [],
  imports: [
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    MatSliderModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    CollapseModule,
    BsDropdownModule,
    BsDatepickerModule,
    TypeaheadModule,
    MatSliderModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class UiLibModule {}
