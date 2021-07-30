import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';

@Component({
  selector: 'app-specialists-tab',
  templateUrl: './specialists-tab.component.html',
  styleUrls: ['./specialists-tab.component.scss'],
})
export class SpecialistsTabComponent implements OnInit, OnChanges {
  @Input() items: SpecialistDataType[] = [];

  constructor(readonly appData: DataService) {
    // this.appData.load().subscribe(
    //   (serverData) => {
    //     Object.keys(serverData).map((key: any) =>
    //       this.items.push(serverData[key])
    //     );
    //   },
    //   (err) => console.log(err)
    // );
  }

  ngOnInit(): void {}

  ngOnChanges() {
    // this.appData.load().subscribe(
    //   (serverData) => {
    //     if (serverData !== null) {
    //       Object.keys(serverData).map((key: any) =>
    //         this.items.push({ ...serverData[key], id: key })
    //       );
    //     }
    //   },
    //   (err) => console.log(err)
    // );
  }

  deleteItem(id: string) {
    this.appData.remove(id).subscribe(
      () => {},
      (err) => console.error(err)
    );
  }
}
