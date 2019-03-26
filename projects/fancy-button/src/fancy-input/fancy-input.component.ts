import { Component } from '@angular/core';

@Component({
  selector: 'app-fancy-input',
  template: `
    Its a fancy input here:
    <input style="border: 2px solid blue;" (keyup)="onKey($event)">
    {{ value }}
  `,
  styleUrls: []
})
export class FancyInputComponent {
  value = '';
  onKey(event: KeyboardEvent) {
    this.value = event.key;
  }
}
