import { Component } from "@angular/core";

@Component({
    selector: 'app-fancy-text',
    template: `
    <p style="color: brown;">
        Its a fancy text and the customization using it but wont affect it,
        however it could. (second edition in core)
    </p>`,    
})
export class FancyTextComponent {}