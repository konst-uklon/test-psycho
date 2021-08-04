import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';

@Component({
  selector: 'app-specialists-tab',
  templateUrl: './specialists-tab.component.html',
  styleUrls: ['./specialists-tab.component.scss'],
})
export class SpecialistsTabComponent implements OnInit, OnChanges {
  @Input() items: SpecialistDataType[] = [];
  // daatForRender:

  constructor(readonly appData: DataService) {}

  ngOnInit(): void {}

  ngOnChanges() {}

  deleteItem(id: string) {
    this.appData.remove(id).subscribe(
      () => {},
      (err) => console.error(err)
    );
  }

  toggleIsFav(item: SpecialistDataType, isFav: string) {
    if (isFav === 'isFavourite') {
      item.isFavourite = !item.isFavourite;
      if (item.isDisFavourite) {
        item.isDisFavourite = !item.isDisFavourite;
      }
    } else {
      item.isDisFavourite = !item.isDisFavourite;
      if (item.isFavourite) {
        item.isFavourite = !item.isFavourite;
      }
    }
    this.appData.toggleFav(item).subscribe(
      () => {},
      (err) => console.error(err)
    );
  }
}
