import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';

@Component({
  selector: 'app-all-specialists',
  templateUrl: './all-specialists.component.html',
  styleUrls: ['./all-specialists.component.scss'],
})
export class AllSpecialistsComponent implements OnInit, OnChanges {
  data: SpecialistDataType[] = [];

  constructor(readonly appData: DataService) {
    this.getDBData();
  }

  ngOnInit = () => {};

  ngOnChanges = () => {
    this.getDBData();
  };

  getDBData = () => {
    let { data, appData } = this;
    appData.getData().subscribe(
      (dataFromDB: SpecialistDataType[]) => {
        this.setDataForRender(dataFromDB);
      },
      (error: string | null) => {
        // dataError = error.message;
      }
    );
  };

  setDataForRender = (arr: SpecialistDataType[]) => {
    this.data = arr;
  };
}
