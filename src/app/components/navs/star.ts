import {Component, Input} from 'angular2/core';

@Component({
  selector: 'star',
  template: '<span *ngIf="value">*</span>'
})
export class Star {
  @Input('if') value: boolean;
}
