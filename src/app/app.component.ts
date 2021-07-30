import { Component } from '@angular/core';
import { SpecialistType } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appData: SpecialistType[] = [];
}
