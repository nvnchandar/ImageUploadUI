import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';
import { HtmlgridComponent } from './htmlgrid/htmlgrid.component';
import { NewhtmlgridComponent } from './newhtmlgrid/newhtmlgrid.component';
import { ChartsComponent } from './charts/charts.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    // {path: '', redirectTo: '/parent', pathMatch: 'full'},
    // {path: 'grid', component: PivotgridComponent},
    // {path: 'htmlgrid', component: HtmlgridComponent},
    // {path: 'newhtmlgrid', component: NewhtmlgridComponent},
    // {path: 'parent', component: ParentComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
