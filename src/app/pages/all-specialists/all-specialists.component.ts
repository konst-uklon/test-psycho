import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-specialists',
  templateUrl: './all-specialists.component.html',
  styleUrls: ['./all-specialists.component.scss'],
})
export class AllSpecialistsComponent implements OnInit, OnChanges {
  data: SpecialistDataType[] = [];

  constructor(readonly appData: DataService) {
    // this.data = this.appData.returnData();
    // this.data = this.appData.load().subscribe(
    //     (serverData) => {
    //       if (serverData !== null) {
    //         Object.keys(serverData).map((key: any) =>
    //           this.data.push({ ...serverData[key], id: key })
    //         );
    //       }
    //       console.log(this.data);
    //     },
    //     (err) => console.error(err)
    //   );
  }

  ngOnInit = () => {
    let { data, appData } = this;
    appData.getData().subscribe(
      (dataFromDB: SpecialistDataType[]) => {
        data = dataFromDB;
      },
      (error: string | null) => {
        // dataError = error.message;
      }
    );
    console.log('All Spec data - ', data);
  };

  ngOnChanges() {}
}
