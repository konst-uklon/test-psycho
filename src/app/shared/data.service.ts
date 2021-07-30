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

  data: SpecialistDataType[] = [];

  constructor(private http: HttpClient) {
    this.load().subscribe(
      (serverData) => {
        if (serverData !== null) {
          Object.keys(serverData).map((key: any) =>
            this.data.push({ ...serverData[key], id: key })
          );
        }
        console.log(this.data);
      },
      (err) => console.error(err)
    );
  }

  load(): Observable<SpecialistDataType[]> {
    return this.http.get<SpecialistDataType[]>(`${DataService.url}.json`);
  }

  create(specialist: SpecialistDataType): Observable<SpecialistDataType> {
    this.data = [...this.data, specialist];

    return this.http.post<any>(`${DataService.url}.json`, specialist);
  }

  remove(id: string): Observable<void> {
    console.log(this.data);
    const newDataWithoutDeleteItem = this.data.filter((item) => item.id !== id);
    this.data = newDataWithoutDeleteItem;
    return this.http.delete<void>(`${DataService.url}/${id}.json`);
  }

  // toggleFav(id: string): Observable<void> {
  //   const item = [...this.data.filter((e) => e.id === id)];

  //   return this.http.put<void>(`${DataService.url}/${id}.json`, newItemData);
  // }
}
