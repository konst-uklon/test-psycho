import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface navbarItemTypes {
  textContent: string;
  path: string;
}

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.scss'],
})
export class NavbarListComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  readonly headerItems: navbarItemTypes[] = [
    { textContent: 'All Specialists', path: '' },
    { textContent: 'Favourites', path: 'favourites' },
    { textContent: 'Disfavourites', path: 'disfavourites' },
    { textContent: 'Add Specialists', path: 'add-specialists' },
    { textContent: 'Analitycs', path: 'analitycs' },
  ];

  constructor() {}

  ngOnInit(): void {}

  closeSidenav = () => {
    this.sidenavToggle.emit();
  };
}
