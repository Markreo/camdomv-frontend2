import {Component, Input, OnInit} from '@angular/core';
import {TableColumn} from 'mht-test-libraries';

@Component({
  selector: 'app-render-table-cell',
  templateUrl: './render-table-cell.component.html',
  styleUrls: ['./render-table-cell.component.scss']
})
export class RenderTableCellComponent implements OnInit {
  @Input() column: TableColumn;
  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.column);
  }

}
