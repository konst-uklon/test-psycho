import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SpecialistDataType, DataService } from 'src/app/shared/data.service';
import { SpecialistType } from '../../app.types';
import { map } from 'rxjs/operators';

interface AnalitycsItemType {
  title: string;
  result: string | number;
}

@Component({
  selector: 'app-analityc-items',
  templateUrl: './analityc-items.component.html',
  styleUrls: ['./analityc-items.component.scss'],
  providers: [DataService],
})
export class AnalitycItemsComponent {
  data: SpecialistDataType[] = [];

  analiticsList: AnalitycsItemType[] = [
    { title: 'Total specialists', result: 0 },
    { title: 'Total psychologist', result: 0 },
    { title: 'Total psychotherapist', result: 0 },
    { title: 'Total psychiatrist', result: 0 },
    { title: 'Total favourites', result: 0 },
    { title: 'Total disfavourites', result: 0 },
  ];

  constructor(readonly appData: DataService) {
    this.appData.load().subscribe(
      (serverData) => {
        Object.keys(serverData).map((key: any) =>
          this.data.push(serverData[key])
        );
        this.setArrForRender(this.data);
      },
      (err) => console.log(err)
    );
  }

  setArrForRender = (arr: SpecialistDataType[]) => {
    const { analiticsList } = this;
    if (!!arr.length) {
      analiticsList[0].result = arr.length;
      analiticsList[1].result = arr.filter(
        (item: SpecialistDataType) => item.speciality === 'Psychologist'
      ).length;
      analiticsList[2].result = arr.filter(
        (item: SpecialistDataType) => item.speciality === 'Psychotherapist'
      ).length;
      analiticsList[3].result = arr.filter(
        (item: SpecialistDataType) => item.speciality === 'Psychiatrist'
      ).length;
      analiticsList[4].result = arr.filter(
        (item: SpecialistDataType) => item.isFavourite
      ).length;
      analiticsList[5].result = arr.filter(
        (item: SpecialistDataType) => item.isDisFavourite
      ).length;
    }
  };
}
