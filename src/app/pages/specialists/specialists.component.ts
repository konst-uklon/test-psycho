import { Component } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss'],
})
export class SpecialistsComponent {
  data: SpecialistDataType[] = [];
  renderData: SpecialistDataType[] = [];
  userLocation: string = this.router.url;
  isMain: boolean = this.userLocation === '/';
  notHomePage: string =
    this.userLocation === '/favourites'
      ? 'Favourites specialists'
      : 'Disfavoirites specialists';
  selectedOption = 'All';
  isLoading = false;
  options = [
    { name: 'All', value: 'All' },
    { name: 'Psychologist', value: 'Psychologist' },
    { name: 'Psychotherapist', value: 'Psychotherapist' },
    { name: 'Psychiatrist', value: 'Psychiatrist' },
  ];

  constructor(readonly appData: DataService, readonly router: Router) {
    this.getDBData();
  }

  // Get data from DB
  getDBData = () => {
    this.isLoading = true;
    this.appData.getData().subscribe(
      (dataFromDB: SpecialistDataType[]) => {
        this.setDataForRender(dataFromDB);
        this.isLoading = false;
      },
      (error: string | null) => {
        // dataError = error.message;
      }
    );
  };

  // Modificate data for render
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

  // Filter for main page
  selectChangeHandler = (value: string) => {
    if (value === 'All') {
      this.renderData = this.data;
    } else {
      this.renderData = [...this.data].filter((e) => e.speciality === value);
    }
  };

  // Delete data from db and component arr
  deleteItem = (id: string) => {
    const newData = [...this.renderData].filter((e) => e.id !== id);
    this.renderData = newData;
    this.appData.remove(id).subscribe(
      () => {},
      (err) => console.error(err)
    );
  };

  // Toggle fav or disfav
  toggleFav = (data: any) => {
    const { toggleItem, itemIsFav } = data;
    if (itemIsFav === 'isFavourite') {
      toggleItem.isFavourite = !toggleItem.isFavourite;
      if (toggleItem.isDisFavourite) {
        toggleItem.isDisFavourite = !toggleItem.isDisFavourite;
      }
    } else {
      toggleItem.isDisFavourite = !toggleItem.isDisFavourite;
      if (toggleItem.isFavourite) {
        toggleItem.isFavourite = !toggleItem.isFavourite;
      }
    }

    const newData = [...this.renderData].map((e) =>
      e.id === toggleItem.id ? { ...e, ...toggleItem } : e
    );

    this.setDataForRender(newData);
    this.appData.toggleFav(toggleItem).subscribe(
      () => {},
      (err) => console.error(err)
    );
  };
}
