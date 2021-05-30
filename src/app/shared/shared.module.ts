import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RenderTableCellComponent} from './_components/render-table-cell/render-table-cell.component';
import {FieldModule} from 'mht-test-libraries';


@NgModule({
  declarations: [
    RenderTableCellComponent
  ],
  exports: [
    RenderTableCellComponent
  ],
  imports: [
    CommonModule, FieldModule
  ]
})
export class SharedModule {
}
