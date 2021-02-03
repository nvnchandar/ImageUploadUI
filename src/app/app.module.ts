import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2CompleterModule } from 'ng2-completer';
import { DxPivotGridModule,
  DxPivotGridComponent,
  DxChartModule, } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { FileService } from './services/file.service';
import { DragDropDirective } from './directives/drogdrop_directive';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';
import { AppRoutingModule } from './app-routing.module';
import { PivotGridService } from './services/pivotgrid.service';
import { HtmlgridComponent } from './htmlgrid/htmlgrid.component';
import { NewhtmlgridComponent } from './newhtmlgrid/newhtmlgrid.component';
import { ChartsComponent } from './charts/charts.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    PivotgridComponent,
    HtmlgridComponent,
    NewhtmlgridComponent,
    ChartsComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    Ng2CompleterModule,
    DxPivotGridModule,
    DxChartModule
  ],
  providers: [FileService, PivotGridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
