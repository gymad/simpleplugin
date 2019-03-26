import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyInputComponent } from './fancy-input.component';

@NgModule({
  declarations: [
    FancyInputComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [FancyInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FancyInputModule {

  constructor(private injector: Injector) {

    const elmInp = createCustomElement(FancyInputComponent, { injector: this.injector });
    try {
      customElements.define('fancy-input', elmInp);
    } catch (e) {
      // skip, it is customized
    }
  }

}
