import { Component } from "@angular/core";

@Component({
    selector: 'app-fancy-text',
    template: `
    <p style="color: yellow;">
        Its a fancy text and the customization wont affect it,
        however it could.
    </p>`,    
})
export class FancyTextComponent {}