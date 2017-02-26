import { Component, OnInit } from "@angular/core";

@Component({
  selector: "as-trainings",
  templateUrl: "./trainings.component.html",
  styleUrls: ["./trainings.component.css"]
})
export class TrainingsComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = `Training`;
  }

}
