import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
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
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarListComponent } from './components/navbar-list/navbar-list.component';
import { SpecialistsComponent } from './pages/specialists/specialists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionButtonComponent,
    LoaderComponent,
    SpecialistsTabComponent,
    AddSpecialistsComponent,
    AnalitycsComponent,
    Page404Component,
    AnalitycItemsComponent,
    SidenavbarComponent,
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
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
