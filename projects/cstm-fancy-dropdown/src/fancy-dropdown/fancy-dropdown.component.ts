import { Component } from '@angular/core';

@Component({
  selector: 'app-fancy-dropdown',
  template: `
    Its an EXTRA fancy dropdown here:
    <select>
        <option>Its over customized</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
    </select>
  `,
  styleUrls: []
})
export class FancyDropdownComponent {

}
