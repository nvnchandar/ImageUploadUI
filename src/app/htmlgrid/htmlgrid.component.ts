import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlgrid',
  templateUrl: './htmlgrid.component.html',
  styleUrls: ['./htmlgrid.component.css']
})
export class HtmlgridComponent implements OnInit {
  siteRowSpan = 3;
  dataList = [
    {
     pname: 'abc',
     numbers: [123, 234]
    },
   {
     pname: 'mno',
     numbers: [125,  237]
    }
   ];

  constructor() { }

  ngOnInit() {
  }

}
