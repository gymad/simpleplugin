import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyButtonComponent } from './fancy-button.component';
import { FancyInputModule } from '../fancy-input/fancy-input.module';
import { FancyDropdownModule } from '../fancy-dropdown/fancy-dropdown.module';
//import { FancyTextModule } from 'projects/fancy-button/src/fancy-text/fancy-text.module';

@NgModule({
  declarations: [
    FancyButtonComponent,
  ],
  imports: [
    BrowserModule,
    FancyInputModule,
    FancyDropdownModule,
    //FancyTextModule,
  ],
  providers: [],
  entryComponents: [FancyButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FancyButtonModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elm = createCustomElement(FancyButtonComponent, { injector: this.injector });
    customElements.define('fancy-button', elm);
  }

}
