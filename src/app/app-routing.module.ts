import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { View3Component } from './portfolio-purchase/components/view3/view3.component';
import { View2Component } from './portfolio-purchase/components/view2/view2.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '',
        redirectTo: '/formulario',
        pathMatch: 'full',
      },
      {
        path: 'formulario',
        loadChildren:() => import('./portfolio-purchase/portfolio-purchase.module').then(m => m.PortfolioPurchaseModule)
        //component: HomeComponent,
      },
      {
        path: 'home',
        component: View3Component
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
