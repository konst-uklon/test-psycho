import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSpecialistsComponent } from './add-specialists.component';

const routes: Routes = [{ path: '', component: AddSpecialistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSpecialistsRoutingModule {}
