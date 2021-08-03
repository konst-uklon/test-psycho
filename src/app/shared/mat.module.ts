import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import {DeleteOutlineIcon} from '@angular/material/icons';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [],
  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // DeleteOutlineIcon,
  ],
})
export class MatModules {}
