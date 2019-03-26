import { Component } from '@angular/core';

@Component({
  selector: 'app-fancy-input',
  template: `
    Its a fancy input here:
    <input style="border: 2px solid green;" (keyup)="onKey($event)">
    {{ value }}
    <br>customization says: <span> {{ message }}</span>
  `,
  styleUrls: []
})
export class FancyInputComponent {
  value = '';  
  message = '';
  onKey(event: any) {
    this.value = event.target.value;
    this.message = this.value == 'fancy' ? 'Its fancy! :)' : 'Its not fancy :('
  }
}
