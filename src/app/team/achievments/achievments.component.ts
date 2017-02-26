import { Component, OnInit } from "@angular/core";

@Component({
  selector: "as-achievments",
  templateUrl: "./achievments.component.html",
  styleUrls: ["./achievments.component.css"]
})
export class AchievmentsComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = `Achievments`;
  }

}
