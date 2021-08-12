import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// without lazy-loading
// import { AddSpecialistsComponent } from './pages/add-specialists/add-specialists.component';
// import { AnalitycsComponent } from './pages/analitycs/analitycs.component';
// import { Page404Component } from './pages/page404/page404.component';
// import { SpecialistsComponent } from './pages/specialists/specialists.component';

const routes: Routes = [
  {
    path: '',
    // without lazy-loading
    // component: SpecialistsComponent,
    loadChildren: () =>
      import('./pages/specialists/specialists.module').then(
        (m) => m.SpecialistsRoutingModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'favourites',
    //  without lazy-loading
    // component: SpecialistsComponent,
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/specialists/specialists.module').then(
        (m) => m.SpecialistsRoutingModule
      ),
  },
  {
    path: 'disfavourites',
    // without lazy-loading
    // component: SpecialistsComponent,
    loadChildren: () =>
      import('./pages/specialists/specialists.module').then(
        (m) => m.SpecialistsRoutingModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'add-specialists',
    // without lazy-loading
    // component: AddSpecialistsComponent,
    loadChildren: () =>
      import('./pages/add-specialists/add-specialists.module').then(
        (m) => m.AddSpecialistsRoutingModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'analitycs',
    // without lazy-loading
    // component: AnalitycsComponent,
    loadChildren: () =>
      import('./pages/analitycs/analitycs.module').then(
        (m) => m.AnalitycsRoutingModule
      ),
    pathMatch: 'full',
  },
  {
    path: '**',
    // without lazy-loading
    // component: Page404Component,
    loadChildren: () =>
      import('./pages/page404/page404.module').then(
        (m) => m.Page404RoutingModule
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
