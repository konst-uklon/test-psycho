import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss'],
})
export class SpecialistsComponent {
  data: SpecialistDataType[] = [];
  renderData: SpecialistDataType[] = [];
  userLocation: string = this._location.path();
  isMain: boolean = this.userLocation === '';
  notHomePage: string =
    this.userLocation === '/favourites'
      ? 'Favourites specialists'
      : 'Disfavoirites specialists';

  selectedOption = 'All';

  options = [
    { name: 'All', value: 'All' },
    { name: 'Psychologist', value: 'Psychologist' },
    { name: 'Psychotherapist', value: 'Psychotherapist' },
    { name: 'Psychiatrist', value: 'Psychiatrist' },
  ];

  constructor(readonly appData: DataService, private _location: Location) {
    this.getDBData();
  }

  getDBData = () => {
    this.appData.getData().subscribe(
      (dataFromDB: SpecialistDataType[]) => {
        this.setDataForRender(dataFromDB);
      },
      (error: string | null) => {
        // dataError = error.message;
      }
    );
  };

  setDataForRender = (arr: SpecialistDataType[]) => {
    const { userLocation } = this;
    this.data = arr;
    if (userLocation === '/favourites') {
      this.renderData = arr.filter((e) => e.isFavourite);
    } else if (userLocation === '/disfavourites') {
      this.renderData = arr.filter((e) => e.isDisFavourite);
    } else {
      this.renderData = arr;
    }
  };
  selectChangeHandler = (value: string) => {
    if (value === 'All') {
      this.renderData = this.data;
    } else {
      this.renderData = [...this.data].filter((e) => e.speciality === value);
    }
  };
}
