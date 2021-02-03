import { Component, OnInit } from '@angular/core';
import { GraphModal } from '../charts/charts.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  alertLeverOverviewChartData: any = [
    {alertName: 'one', alertCount: 1000}
    ,
    {alertName: 'two', alertCount: 2}
    // ,
    // {alertName: 'three', alertCount: 3}
  ];
  alertLeverOverviewChartMax: number = 0;
  alertLevelBarWidth: number;
  barLabel: string = "#00447C";
  barArgumentLabel: string = "#444444";
  barTitle: string = "#444444";
  barChartGridColor: string = "#C7C8C9";
  barChartToolTipBGColor: string = "#26262B";
  barChartToolTipTextColor: string = "#FFFFFF";


  constructor() { }

  ngOnInit() {
    this.maxCount(this.alertLeverOverviewChartData,'alert level');
  }

  maxCount(data: GraphModal[], alert:string) {
    var max = 0;
    // this.rootCauseBarWidth = 0.18;
    // console.log('data', data, alert)
    for (var i = 0; i < data.length; i++) {
      if (max == 0) {
        max = data[i].alertCount;
      }
      else if (data[i].alertCount > max) {
        max = data[i].alertCount
      }
    }
    switch(alert){
      case 'alert level': 
          this.alertLevelBarWidth = 0.18;
          this.alertLevelBarWidth = this.alertLevelBarWidth * data.length;
          this.alertLeverOverviewChartMax = max * 1.1;
          break;
      default: break;
    }
  }


}
