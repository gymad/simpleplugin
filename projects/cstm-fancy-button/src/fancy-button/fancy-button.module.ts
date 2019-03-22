import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyButtonComponent } from './fancy-button.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    FancyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [FancyButtonComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FancyButtonModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    console.log('custom fancy button is loading..');

    const elm = createCustomElement(FancyButtonComponent, { injector: this.injector });
    customElements.define('fancy-button', elm);
  }

}
