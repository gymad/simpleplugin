import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyInputComponent } from './fancy-input.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    FancyInputComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [FancyInputComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FancyInputModule {

  constructor(private injector: Injector) {
    console.log('fancy input is loading..');

    const elmInp = createCustomElement(FancyInputComponent, { injector: this.injector });
    try {
      customElements.define('fancy-input', elmInp);
    } catch (e) {
      // skip, it is customized
      console.log('skip, input is customized');
    }
  }

}
