import { NgModule, Injector } from "@angular/core";
import { FancyTextComponent } from './fancy-text.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
    declarations: [FancyTextComponent],
    entryComponents: [FancyTextComponent]
})
export class FancyTextModule {
    
    constructor(private injector: Injector) {

        const elmTxt = createCustomElement(FancyTextComponent, { injector: this.injector });
        try {
            customElements.define('fancy-text', elmTxt);
        } catch (e) {
            // skip, it is customized
        }
    }
}