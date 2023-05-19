import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostUpdateCostComponent } from './component/update-cost/update-cost.component';
import { ViewListComponent } from './component/view-list/view-list.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CostComponent } from './cost.component';
import { CostMaterialMoudule } from './module/material/cost-material.module';
import { BrokerRoutingModule } from "./module/routing/cost-routing.module";


@NgModule({
  declarations: [
    CostUpdateCostComponent,
    ViewListComponent,
    CostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CostMaterialMoudule,
    BrokerRoutingModule
  ]
})
export class CostModule { }
