import { Component, OnInit } from "@angular/core";

@Component({
  selector: "as-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = `Tournaments/Caledar`;
  }

}
