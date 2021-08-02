import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService, SpecialistDataType } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: SpecialistDataType[] = [];
  dataError: null | string = null;
  isLoading: boolean = false;

  constructor(private http: HttpClient, private appData: DataService) {}

  ngOnInit = () => {
    let { isLoading, appData, data, dataError } = this;
    isLoading = true;
    appData.getData().subscribe(
      (dataFromDB: SpecialistDataType[]) => {
        isLoading = false;
        data = dataFromDB;
      },
      (error: string | null) => {
        isLoading = false;
        // dataError = error.message;
      }
    );
  };
}
