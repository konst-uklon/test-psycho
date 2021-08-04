import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';

export interface SpecialistDataType {
  email: string;
  name: string;
  speciality: string;
  isFavourite: boolean;
  isDisFavourite: boolean;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  static url =
    'https://specialists-8c218-default-rtdb.europe-west1.firebasedatabase.app/specialists';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  create = (
    specialist: SpecialistDataType // : Observable<SpecialistDataType>
  ) => {
    this.http
      .post<{ name: string }>(`${DataService.url}.json`, specialist)
      .subscribe(
        (resData) => {
          resData;
        },
        (err) => console.error(err)
      );
  };

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${DataService.url}/${id}.json`);
  }

  toggleFav(newItemData: SpecialistDataType): Observable<void> {
    return this.http.put<void>(
      `${DataService.url}/${newItemData.id}.json`,
      newItemData
    );
  }

  getData = () => {
    return this.http.get<SpecialistDataType[]>(`${DataService.url}.json`).pipe(
      map((res) => {
        const dataArr: SpecialistDataType[] = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            dataArr.push({ ...res[key], id: key });
          }
        }
        return dataArr;
      })
    );
    // .subscribe(
    //   (data) => {
    //     this.isLoading = false;
    //     this.data = data;
    //     console.log('Subscribe - ', this.data);
    //   },
    //   (err) => console.error(err)
    // );
  };
}
