import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';
import { PortfolioPurchaseRoutingModule } from './portfolio-purchase-routing.module';
import { ReverseatomComponent } from './components/reverseatom/reverseatom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { View3Component } from './components/view3/view3.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    View1Component,
    View2Component,
    ReverseatomComponent,
    View3Component,
    ModalComponent
  ],
  imports: [
    PortfolioPurchaseRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ]
})
export class PortfolioPurchaseModule { }
