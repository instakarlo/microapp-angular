import { Component, OnInit } from '@angular/core';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public model = new TableModel();

  constructor() { }

  ngOnInit() {
    this.model.data = [
      [new TableItem({ data: 'Laptops' }), new TableItem({ data: '4008756' }), new TableItem({ data: '2543' })],
      [new TableItem({ data: 'Laptops' }), new TableItem({ data: '4008757' }), new TableItem({ data: '2543' })],
      [new TableItem({ data: 'Laptops' }), new TableItem({ data: '4008758' }), new TableItem({ data: '2543' })],
      [new TableItem({ data: 'Laptops' }), new TableItem({ data: '4008759' }), new TableItem({ data: '2543' })],
    ];
    this.model.header = [new TableHeaderItem({ data: 'Commodity' }), new TableHeaderItem({ data: 'PN' }), new TableHeaderItem({ data: 'Machine Type' })];
  }

}
