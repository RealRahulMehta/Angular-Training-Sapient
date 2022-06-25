import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterServiceComponent } from './counter-service.component';

const routes: Routes = [{
  path: '', component: CounterServiceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterServiceRoutingModule { }
