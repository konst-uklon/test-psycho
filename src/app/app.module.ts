import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SpecialistsTabComponent } from './components/specialists-tab/specialists-tab.component';
import { AddSpecialistsComponent } from './pages/add-specialists/add-specialists.component';
import { AnalitycsComponent } from './pages/analitycs/analitycs.component';
import { Page404Component } from './pages/page404/page404.component';
import { AnalitycItemsComponent } from './components/analityc-items/analityc-items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material-module';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarListComponent } from './components/navbar-list/navbar-list.component';
import { SpecialistsComponent } from './pages/specialists/specialists.component';
import { MatModules } from './shared/mat.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    SpecialistsTabComponent,
    AddSpecialistsComponent,
    AnalitycsComponent,
    Page404Component,
    AnalitycItemsComponent,
    NavbarListComponent,
    SpecialistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    LayoutModule,
    FlexLayoutModule,
    MatModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
