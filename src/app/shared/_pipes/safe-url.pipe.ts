import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitize: DomSanitizer) {

  }

  transform(value: any, args?: any): any {
    return this.sanitize.sanitize(SecurityContext.URL, value);
  }

}
