import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-setting-table-column',
  templateUrl: './setting-table-column.component.html',
  styleUrls: ['./setting-table-column.component.scss']
})
export class SettingTableColumnComponent implements OnInit {
  @Input() module

  constructor() { }

  ngOnInit(): void {
  }

}
