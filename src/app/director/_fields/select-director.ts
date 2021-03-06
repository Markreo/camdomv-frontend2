import {SelectObjectField} from 'mht-test-libraries';
import {ENDPOINT_DIRECTOR, LABEL_DIRECTOR} from '../_constants/director.const';

export class SelectDirector extends SelectObjectField {
  constructor(options: Partial<SelectDirector> = {}) {
    const init = {
      key: 'director',
      label: LABEL_DIRECTOR,
      endpoint: ENDPOINT_DIRECTOR
    };
    super(Object.assign(init, options));
  }
}



