import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyButtonComponent } from './fancy-button.component';
// import { FancyInputComponent } from './fancy-input.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FancyInputModule } from '../fancy-input/fancy-input.module';
import { FancyTextModule } from '../fancy-text/fancy-text.module';

@NgModule({
  declarations: [
    FancyButtonComponent
  ],
  imports: [
    BrowserModule,
    FancyInputModule,
    FancyTextModule,
  ],
  providers: [],
  entryComponents: [FancyButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FancyButtonModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elmBtn = createCustomElement(FancyButtonComponent, { injector: this.injector });
    try {
      customElements.define('fancy-button', elmBtn);
    } catch (e) {
      // skip, it is customized
    }
  }

}
