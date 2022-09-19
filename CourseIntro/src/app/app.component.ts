import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'
import { DomSanitizer } from '@angular/platform-browser';
import { WebAlertComponent } from './web-alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h3{
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  content = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer){

    const AlertElement = createCustomElement(WebAlertComponent, {
      injector
    });

    customElements.define('my-alert',AlertElement);

    setTimeout(()=>{
      this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message="Ram Ram"></my-alert>')
    },1000)
  }
}
