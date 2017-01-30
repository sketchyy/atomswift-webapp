import { Directive, AfterViewChecked } from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[appMdl]'
})
export class MaterialDesignLightDirective implements AfterViewChecked {

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }
}
