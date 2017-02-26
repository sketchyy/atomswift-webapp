import { Directive, AfterViewChecked } from "@angular/core";

declare var componentHandler: any;

@Directive({
  selector: "[aswMDL]"
})
export class MaterialDesignLiteDirective implements AfterViewChecked {

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

}
