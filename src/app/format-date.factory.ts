import {FormatDateFactory} from 'mht-test-libraries';
import {formatDate} from '@angular/common';

export class BuildFormatDateFactory extends FormatDateFactory {
  formatDate(date: Date, format, locale): string {
    console.log('formatDate here');
    return formatDate(date, format, locale || 'en-US');
  }
}
