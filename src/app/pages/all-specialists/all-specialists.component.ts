import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';

@Component({
  selector: 'app-all-specialists',
  templateUrl: './all-specialists.component.html',
  styleUrls: ['./all-specialists.component.scss'],
})
export class AllSpecialistsComponent implements OnInit {
  data: SpecialistDataType[] = [];

  constructor(readonly appData: DataService) {
    this.data = this.appData.returnData();
    console.log(this.data);
  }

  ngOnInit(): void {}
}
