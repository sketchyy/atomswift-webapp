import { Component, OnInit } from "@angular/core";

@Component({
  selector: "as-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  menuItems: any[];
  navbarClass: string;
  defaultNavbarClass: string;

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { link: "/blog", label: "News" },
      { link: "/team", label: "Team" },
      { link: "/events", label: "Club" }, // TODO: rename component to club
      { link: "/media", label: "Media" },
      { link: "/ultimate", label: "Ultimate" },
    ];
    this.defaultNavbarClass = "six columns topnav";
    this.navbarClass = this.defaultNavbarClass;
  }

  toggleNavbar() {
    const x = document.getElementById("myTopnav");
    if (this.navbarClass === this.defaultNavbarClass) {
      this.navbarClass += " responsive";
    } else {
      this.navbarClass = this.defaultNavbarClass;
    }
  }

}
