import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControllingComponent } from './controlling.component';

const routes: Routes = [ {
  path: ':val',
  component: ControllingComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControllingRoutingModule { }
