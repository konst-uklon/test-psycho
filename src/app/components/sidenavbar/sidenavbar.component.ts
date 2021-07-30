import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface headerItemTypes {
  textContent: string;
  path: string;
}

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
})
export class SidenavbarComponent implements OnInit {
  @Output() siedenavClose = new EventEmitter();

  readonly headerItems: headerItemTypes[] = [
    { textContent: 'All Specialists', path: '' },
    { textContent: 'Favourites Spec', path: 'favourites' },
    { textContent: 'Disfavourites Spec', path: 'disfavourites' },
    { textContent: 'Add Specialists', path: 'add-specialists' },
    { textContent: 'Analitycs', path: 'analitycs' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSidenavClose = () => this.siedenavClose.emit();
}
