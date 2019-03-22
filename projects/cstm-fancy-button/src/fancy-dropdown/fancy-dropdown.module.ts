import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyDropdownComponent } from './fancy-dropdown.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    FancyDropdownComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [FancyDropdownComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FancyDropdownModule {

  constructor(private injector: Injector) {
    console.log('fancy dropdown is loading..');

    const elmDD = createCustomElement(FancyDropdownComponent, { injector: this.injector });
    try {
      customElements.define('fancy-dropdown', elmDD);
    } catch (e) {
      // skip, it is customized
      console.log('skip, dropdown is customized');
    }
  }

}
