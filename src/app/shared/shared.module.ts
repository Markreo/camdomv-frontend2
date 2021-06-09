import {NgModule, Sanitizer} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RenderTableCellComponent} from './_components/render-table-cell/render-table-cell.component';
import {FieldModule} from 'mht-test-libraries';
import {BuildAutoTipPipe} from './_pipes/build-auto-tip.pipe';
import {SettingTableColumnComponent} from './_components/setting-table-column/setting-table-column.component';
import {SettingTableFilterComponent} from './_components/setting-table-filter/setting-table-filter.component';
import {SafeHtmlPipe} from './_pipes/safe-html.pipe';
import {SafeUrlPipe} from './_pipes/safe-url.pipe';


@NgModule({
  declarations: [
    RenderTableCellComponent,
    BuildAutoTipPipe,
    SettingTableColumnComponent,
    SettingTableFilterComponent,
    SafeHtmlPipe,
    SafeUrlPipe
  ],
  exports: [
    RenderTableCellComponent,
    BuildAutoTipPipe,
    SettingTableColumnComponent,
    SettingTableFilterComponent,
  ],
  imports: [
    CommonModule, FieldModule
  ]
})
export class SharedModule {
}
