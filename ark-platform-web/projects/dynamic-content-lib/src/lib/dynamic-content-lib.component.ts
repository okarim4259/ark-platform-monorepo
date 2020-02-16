import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ark-paragraph",
  template: `
    <p>
      dynamic-content-lib works!
    </p>
  `,
  styles: []
})
export class DynamicContentLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
