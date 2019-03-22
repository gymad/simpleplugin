import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyButtonComponent } from './fancy-button.component';
// import { FancyInputComponent } from './fancy-input.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { FancyInputModule } from '../fancy-input/fancy-input.module';

@NgModule({
  declarations: [
    FancyButtonComponent
  ],
  imports: [
    BrowserModule,
    FancyInputModule
  ],
  providers: [],
  entryComponents: [FancyButtonComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FancyButtonModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    console.log('fancy button is loading..');

    const elmBtn = createCustomElement(FancyButtonComponent, { injector: this.injector });
    try {
      customElements.define('fancy-button', elmBtn);
    } catch (e) {
      // skip, it is customized
      console.log('skip, button is customized');
    }
  }

}
