import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-button',
  template: '<button style="color: blue;" (click)="clicked()">{{ title }}</button> <span style="color: red;">{{ outputMessage }}</span>',
  styleUrls: []
})
export class FancyButtonComponent {
  @Input() title = 'fancy-button';
  @Input() message = '';
  defaultMessage = 'yuppee!! we have a custom event handler!';
  outputMessage = '';
  clicked() {
    this.outputMessage = this.message ? this.message : this.defaultMessage;
  }
}
