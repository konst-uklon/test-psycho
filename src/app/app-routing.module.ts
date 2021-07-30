import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSpecialistsComponent } from './pages/add-specialists/add-specialists.component';
import { AnalitycsComponent } from './pages/analitycs/analitycs.component';
import { Page404Component } from './pages/page404/page404.component';
import { AllSpecialistsComponent } from './pages/all-specialists/all-specialists.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { DisfavouritesComponent } from './pages/disfavourites/disfavourites.component';

const routes: Routes = [
  { path: '', component: AllSpecialistsComponent, pathMatch: 'full' },
  { path: 'favourites', component: FavouritesComponent, pathMatch: 'full' },
  {
    path: 'disfavourites',
    component: DisfavouritesComponent,
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
