import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitize: DomSanitizer) {

  }

  transform(value: any, args?: any): any {
    return this.sanitize.sanitize(SecurityContext.HTML, value);
  }

}
