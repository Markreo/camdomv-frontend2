import {Component, Input, OnInit} from '@angular/core';
import {BaseField, SelectObjectField, TableColumn} from 'mht-test-libraries';

@Component({
  selector: 'app-render-table-cell',
  templateUrl: './render-table-cell.component.html',
  styleUrls: ['./render-table-cell.component.scss']
})
export class RenderTableCellComponent implements OnInit {
  @Input() column: TableColumn;
  @Input() data: any;
  mode;

  constructor() {
  }

  ngOnInit(): void {
    this.mode = this.switchMode(this.column.field);
  }

  switchMode(field: BaseField): string {
    switch (true) {
      case field instanceof SelectObjectField:
        return 'object';
      // case field instanceof SelectObjectField:
      //   return 'object';
      default:
        return 'default';
    }
  }

}
