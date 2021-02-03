import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() barData: GraphModal[];
  @Input() barWidth: number;
  @Input() barMax: number;
  @Input() len: string;
  @Input() wid: number;
  @Input() hie: number;
  @Input() barLabel: string;
  @Input() barArgumentLabel: string;
  @Input() barTitle: string;
  @Input() barTitleText: string;
  @Input() barColor: string;
  @Input() barArgumentFont: number;
  @Input() barValueFont: number;
  @Input() barTitleFont: number;
  @Input() barLabelFont: number;
  @Input() gridColor: string;
  @Input() barChartTotalSize: string;
  @Input() allowDecimals: boolean;

  @Input() toolTipBackgroundColor: string;
  @Input() toolTipTextColor: string;
  @ViewChild("targetDataGrid",{static:true}) barChart: DxChartComponent;
  visualRangeValue: any;
  maxHieght: number;


  constructor() { }

  ngOnInit() {
    // var maxHieght = this.getMaxBarHieght(this.barData)
    // this.visualRangeValue = [0,maxHieght];
    
  }

  ngOnChanges(){
    // var maxHieght = this.getMaxBarHieght(this.barData)
    // this.visualRangeValue = [0,maxHieght];
  }


  customizeLabel=(arg:any)=> {
    let argument:string;
    argument = arg.value;
    if(this.barChartTotalSize == '1'){
      if(argument.length > 7)
      return argument.substr(0,6) + "..";
    else
      return argument;
    }
    if(this.barChartTotalSize == '2'){
      if(argument.length > 10)
      return argument.substr(0,10) + "..";
    else
      return argument;
    }
    
  }


  // getVisualRange(){
  //   this.maxHieght = this.getMaxBarHieght(this.barData)
  //   return [0,this.maxHieght]
  // }


  // getMaxBarHieght(collection:GraphModal[]=[]){
  //   let barHieght = 0;
  //   if(collection.length){
  //     const numArr = extractArray(collection, "alertCount");
  //     barHieght = Math.max(...numArr)*1.1;
  //   }
  //   return barHieght;
  // }  


  customizeTooltip = (info: any) => {
    return {
      html: "<div><div class='tooltip-header'>" +
          info.argument + " :" + info.value +
          "</div></div>"
    };
    
  }


}

export class GraphModal{
      alertName: string;
      alertCount: number;
  } 
