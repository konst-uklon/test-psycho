import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSpecialistsComponent } from './pages/add-specialists/add-specialists.component';
import { AnalitycsComponent } from './pages/analitycs/analitycs.component';
import { Page404Component } from './pages/page404/page404.component';
import { SpecialistsComponent } from './pages/specialists/specialists.component';

const routes: Routes = [
  { path: '', component: SpecialistsComponent, pathMatch: 'full' },
  { path: 'favourites', component: SpecialistsComponent, pathMatch: 'full' },
  {
    path: 'disfavourites',
    component: SpecialistsComponent,
    pathMatch: 'full',
  },
  {
    path: 'add-specialists',
    component: AddSpecialistsComponent,
    pathMatch: 'full',
  },
  { path: 'analitycs', component: AnalitycsComponent, pathMatch: 'full' },
  { path: '**', component: Page404Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
