import { Component, OnInit } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';

@Component({
  selector: 'app-all-specialists',
  templateUrl: './all-specialists.component.html',
  styleUrls: ['./all-specialists.component.scss'],
})
export class AllSpecialistsComponent implements OnInit {
  data: SpecialistDataType[] = [];

  constructor(readonly appData: DataService) {
    this.appData.load().subscribe(
      (serverData) => {
        if (serverData !== null) {
          Object.keys(serverData).map((key: any) =>
            this.data.push({ ...serverData[key], id: key })
          );
        }
        console.log(this.data);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}
}
