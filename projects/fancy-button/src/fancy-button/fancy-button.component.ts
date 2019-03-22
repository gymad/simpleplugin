import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-button',
  template: `
    <button style="color: blue;">{{ title }}</button><br>
  `,
  styleUrls: [],
})
export class FancyButtonComponent {
  @Input() title = 'fancy-button';
}
