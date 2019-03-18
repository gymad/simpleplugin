import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-button',
  template: '<button style="color: blue;" (click)="clicked()">{{ title }}</button> {{ message }}',
  styleUrls: []
})
export class FancyButtonComponent {
  @Input() title = 'fancy-button';
  message = '';
  clicked() {
    this.message = 'yuppee!';
  }
}
