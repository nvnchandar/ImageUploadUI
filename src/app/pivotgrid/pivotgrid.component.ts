import { Component, OnInit, ViewChild } from '@angular/core';
import { DxPivotGridComponent } from 'devextreme-angular';
import { PivotGridService } from '../services/pivotgrid.service';

@Component({
  selector: 'app-pivotgrid',
  templateUrl: './pivotgrid.component.html',
  styleUrls: ['./pivotgrid.component.css']
})
export class PivotgridComponent implements OnInit {
  @ViewChild(DxPivotGridComponent, { static: false }) pivotGrid: DxPivotGridComponent;
  pivotGridDataSource: any;
  constructor(service: PivotGridService) {
    this.customizeTooltip = this.customizeTooltip.bind(this);

    this.pivotGridDataSource = {
      fields: [{
        caption: 'Region',
        width: 120,
        dataField: 'region',
        area: 'row',
        sortBySummaryField: 'Total',
        expanded: true
      }, {
        caption: 'City',
        dataField: 'city',
        width: 150,
        area: 'row',
        expanded: true
      }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column',
        expanded: true
      }, {
        groupName: 'date',
        groupInterval: 'quarter',
        visible: false,
        expanded: true
      }, {
        groupName: 'date',
        groupInterval: 'month',
        visible: true,
        expanded: true
      }, {
        caption: 'Total',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        format: 'currency',
        area: 'data',
        expanded: true
      }],
      store: service.getSales()
    };
   }

  ngOnInit() {
  }

  customizeTooltip(args) {
    return {
      html: args.seriesName + ' | Total<div class=\'currency\'>' + args.valueText + '</div>'
    };
  }

  onCellClick(e: any) {
    e.cancel = true;
  }

}
