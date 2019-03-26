import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyDropdownComponent } from './fancy-dropdown.component';

@NgModule({
  declarations: [
    FancyDropdownComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [FancyDropdownComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FancyDropdownModule {

  constructor(private injector: Injector) {
    const elmDD = createCustomElement(FancyDropdownComponent, { injector: this.injector });
    try {
      customElements.define('fancy-dropdown', elmDD);
    } catch (e) {
      // skip, it is customized
    }
  }

}
