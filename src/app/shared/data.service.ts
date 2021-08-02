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

  // data: SpecialistDataType[] = [];

  constructor(private http: HttpClient) {
    // this.load().subscribe(
    //   (serverData) => {
    //     if (serverData !== null) {
    //       Object.keys(serverData).map((key: any) =>
    //         this.data.push({ ...serverData[key], id: key })
    //       );
    //     }
    //     console.log(this.data);
    //   },
    //   (err) => console.error(err)
    // );
  }

  ngOnInit() {
    // this.getData();
    // console.log('NgOnInit - ', this.data);
  }

  load() {
    //: Observable<SpecialistDataType[]>
    return this.getData();
  }

  // returnData = () => this.data.load().subscribe(()=> {}, (err) => console.error(err));

  create(
    specialist: SpecialistDataType // : Observable<SpecialistDataType>
  ) {
    // this.data = [...this.data, specialist];

    this.http
      .post<{ name: string }>(`${DataService.url}.json`, specialist)
      .subscribe(
        (resData) => {
          resData;
        },
        (err) => console.error(err)
      );
    // .subscribe(
    //   () => {},
    //   (err) => console.error(err)
    // );
  }

  remove(id: string): Observable<void> {
    // console.log(this.data);
    // const newDataWithoutDeleteItem = this.data.filter((item) => item.id !== id);
    // this.data = newDataWithoutDeleteItem;
    return this.http.delete<void>(`${DataService.url}/${id}.json`);
  }

  // toggleFav(id: string): Observable<void> {
  //   const item = [...this.data.filter((e) => e.id === id)];

  //   return this.http.put<void>(`${DataService.url}/${id}.json`, newItemData);
  // }

  getData() {
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
  }
}
