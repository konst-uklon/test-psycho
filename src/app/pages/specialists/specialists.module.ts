import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialistsComponent } from './specialists.component';

const routes: Routes = [{ path: '', component: SpecialistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialistsRoutingModule {}
