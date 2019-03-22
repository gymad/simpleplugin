import { Component, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
