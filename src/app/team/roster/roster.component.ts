import { Component, OnInit } from "@angular/core";

@Component({
  selector: "as-roster",
  templateUrl: "./roster.component.html",
  styleUrls: ["./roster.component.css"]
})
export class RosterComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = `Roster`;
  }

}
