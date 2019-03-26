import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FancyTextComponent } from './fancy-text.component';

@NgModule({
    declarations: [FancyTextComponent],
    entryComponents: [FancyTextComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
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