import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FancyButtonComponent } from './fancy-button.component';

@NgModule({
  declarations: [
    FancyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [FancyButtonComponent]
})
export class FancyButtonModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elm = createCustomElement(FancyButtonComponent, { injector: this.injector });
    customElements.define('fancy-button', elm);
  }

}
