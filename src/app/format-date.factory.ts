import {FormatDateFactory} from 'mht-test-libraries';
import {formatDate} from '@angular/common';

export class BuildFormatDateFactory extends FormatDateFactory {
  formatDate(date: Date, format, locale): string {
    return formatDate(date, format, locale || 'en-US');
  }
}
