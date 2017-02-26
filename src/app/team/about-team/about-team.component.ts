import { Component, OnInit } from "@angular/core";

@Component({
  selector: "as-about-team",
  templateUrl: "./about-team.component.html",
  styleUrls: ["./about-team.component.css"]
})
export class AboutTeamComponent implements OnInit {
  title: string;
  text: string;

  constructor() { }

  ngOnInit() {
    this.title = `About team`;
    this.text = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus arcu, laoreet quis ultricies at, rhoncus nec orci. Etiam neque libero, ultricies sed iaculis sed, volutpat at augue. Pellentesque aliquet urna imperdiet, mollis augue consequat, laoreet orci. Proin odio mi, mattis id venenatis a, laoreet non diam. Morbi fringilla molestie aliquam. Proin et pellentesque eros, a iaculis urna. Praesent pellentesque orci nec justo volutpat, sed imperdiet augue elementum. Ut vel feugiat leo. Nam tempor libero a purus luctus, quis egestas velit suscipit. Suspendisse dolor lacus,venenatis ac porta quis, varius ut odio. Morbi id interdum lacus.

      Aenean ac iaculis nunc. Phasellus ut tempus purus, vel lobortis mi. Donec tincidunt tortor porta ligula sagittis, ut lacinia metus maximus. Sed consequat orci non nulla commodo, sed pellentesque quam cursus. Nunc viverra vel nibh ac suscipit. Vivamus lacinia, justo vitae tristique hendrerit, ipsum leo tincidunt arcu, at ullamcorper erat erat a lacus. Integer nisl velit, scelerisque a pharetra ac, convallis in enim. Donec vel urna gravida, vulputate sem eu, tincidunt est. Aliquam pellentesque tortor eget elit finibus, ac auctor dolor condimentum. Aenean pharetra, risus nec vehicula rutrum, ante purus laoreet lectus, vel dictum urna nulla eu lacus. Quisque ullamcorper, orci sagittis blandit fringilla, elit ipsum porta sem, ut scelerisque metus risus sed lacus. Aliquam pretium ex et convallis ultrices. Quisque venenatis elit ultrices dapibus congue. Suspendisse porttitor ligula dui, quis vulputate arcu faucibus eu. Mauris diam tellus, mattis sit amet imperdiet ut, condimentum ut diam. In hac habitasse platea dictumst.
    `;
  }

}
