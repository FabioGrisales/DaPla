import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';
import { View3Component } from './components/view3/view3.component';


const routes: Routes = [
    {
        path: '',
        component: View2Component,
    },
    {
      path: 'view1',
      component: View1Component,
    },
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule,
    ]
})
export class PortfolioPurchaseRoutingModule {

}
