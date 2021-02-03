import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newhtmlgrid',
  templateUrl: './newhtmlgrid.component.html',
  styleUrls: ['./newhtmlgrid.component.css']
})
export class NewhtmlgridComponent implements OnInit {
  siteRowSpan = 0;
  loaded = false;
  site: any = {};
  cols: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  demand: any = {site: {}, totalDemand: []};
  inventory: any = {slc: [], foh: [], totalInventory: [], projInventory: [], projDSI: []};

  supply: any = {name: '', air: [], surface: [], all: []};

  suppliList: any[] = [];

  response: any = {demand: {}, supply: [], inventory: {}};


  responseSite: any = [];
  responseInventory: any = [];


  constructor() { }

  ngOnInit() {
    this.site.APJ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.site.CCC2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.site.DAO = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.site.EMEA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.site['Future Backlog'] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.demand.site = this.site;
    this.demand.totalDemand = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.response.demand = this.demand;

    this.supply.name = 'Supplier ABC';
    this.supply.air = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.supply.surface = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.supply.all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.suppliList.push(JSON.parse(JSON.stringify(this.supply)));

    this.supply.name = 'Supplier EFG';
    this.supply.air = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.supply.surface = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.supply.all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.suppliList.push(JSON.parse(JSON.stringify(this.supply)));

    this.supply.name = 'Total Supply';
    this.supply.air = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.supply.surface = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.supply.all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.suppliList.push(JSON.parse(JSON.stringify(this.supply)));

    this.response.supply = this.suppliList;

    this.inventory.slc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.inventory.foh = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.inventory.totalInventory = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.inventory.projInventory = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.inventory.projDSI = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.response.inventory = this.inventory;

    console.log(Object.keys(this.response.demand.site).length);
    this.siteRowSpan = Object.keys(this.response.demand.site).length;

    console.log(this.response);

    this.responseSite = Object.keys(this.response.demand.site);
    this.responseInventory = Object.keys(this.response.inventory);
    console.log(Object.values(this.response.demand.site.APJ));
    this.loaded = true;
  }

}
