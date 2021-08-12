import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalitycsComponent } from './analitycs.component';

const routes: Routes = [{ path: '', component: AnalitycsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalitycsRoutingModule {}
