import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RenderTableCellComponent} from './_components/render-table-cell/render-table-cell.component';
import {FieldModule} from 'mht-test-libraries';
import { BuildAutoTipPipe } from './_pipes/build-auto-tip.pipe';


@NgModule({
  declarations: [
    RenderTableCellComponent,
    BuildAutoTipPipe,
  ],
  exports: [
    RenderTableCellComponent,
    BuildAutoTipPipe
  ],
  imports: [
    CommonModule, FieldModule
  ]
})
export class SharedModule {
}
