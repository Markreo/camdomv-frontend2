import {NgModule} from '@angular/core';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzTypographyModule} from 'ng-zorro-antd/typography';


const exs = [
  NzPageHeaderModule,
  NzLayoutModule,
  NzButtonModule,
  NzBreadCrumbModule,
  NzDropDownModule,
  NzTableModule,
  NzTagModule,
  NzDividerModule,
  NzInputModule,
  NzFormModule,
  NzSpaceModule,
  NzTypographyModule
];

@NgModule({
  imports: exs,
  exports: exs
})
export class AntProviderModule {
}
