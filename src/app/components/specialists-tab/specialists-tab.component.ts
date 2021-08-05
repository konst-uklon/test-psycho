import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService, SpecialistDataType } from 'src/app/shared/data.service';

@Component({
  selector: 'app-specialists-tab',
  templateUrl: './specialists-tab.component.html',
  styleUrls: ['./specialists-tab.component.scss'],
})
export class SpecialistsTabComponent {
  @Input() items: SpecialistDataType[] = [];
  @Output() readonly deleteItemEvent = new EventEmitter<string>();
  @Output() readonly toggleFavEvent = new EventEmitter<{
    toggleItem: SpecialistDataType;
    itemIsFav: string;
  }>();

  constructor(readonly appData: DataService) {}

  deleteItem(id: string) {
    this.deleteItemEvent.emit(id);
  }

  toggleFavHandler(item: SpecialistDataType, isFav: string) {
    this.toggleFavEvent.emit({ toggleItem: item, itemIsFav: isFav });
  }
}
