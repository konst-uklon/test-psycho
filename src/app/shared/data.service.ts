import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
export class DataService {
  static url =
    'https://specialists-8c218-default-rtdb.europe-west1.firebasedatabase.app/specialists';

  constructor(private http: HttpClient) {}

  // Get
  getData = () =>
    this.http.get<SpecialistDataType[]>(`${DataService.url}.json`).pipe(
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

  // Post
  create = (specialist: SpecialistDataType): Observable<{ name: string }> =>
    this.http.post<{ name: string }>(`${DataService.url}.json`, specialist);

  // Delete
  remove = (id: string): Observable<void> =>
    this.http.delete<void>(`${DataService.url}/${id}.json`);

  // Put
  toggleFav = (newItemData: SpecialistDataType): Observable<void> =>
    this.http.put<void>(
      `${DataService.url}/${newItemData.id}.json`,
      newItemData
    );
}
