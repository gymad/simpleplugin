import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-button',
  template: `
    <button style="color: green;" (click)="clicked()">{{ title }}</button>
    <span style="color: red;">{{ outputMessage }}</span>
    <br>
    This site extended via dropdown by custom plugin:
    <fancy-dropdown></fancy-dropdown>
    <fancy-text></fancy-text>
  `,
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
