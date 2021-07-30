import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
})
export class AppMaterialModule {}
