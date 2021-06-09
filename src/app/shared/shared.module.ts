import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RenderTableCellComponent} from './_components/render-table-cell/render-table-cell.component';
import {FieldModule} from 'mht-test-libraries';
import { BuildAutoTipPipe } from './_pipes/build-auto-tip.pipe';
import { SettingTableColumnComponent } from './_components/setting-table-column/setting-table-column.component';
import { SettingTableFilterComponent } from './_components/setting-table-filter/setting-table-filter.component';


@NgModule({
  declarations: [
    RenderTableCellComponent,
    BuildAutoTipPipe,
    SettingTableColumnComponent,
    SettingTableFilterComponent,
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
