import { NgModule, Component, enableProdMode } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxTemplateModule, DxButtonModule, DxPopupModule, DxPopoverModule,
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Service, House, Agent } from '../../services/dialogs.service';


@Component({
  selector: 'app-dialogs-and-notifications',
  templateUrl: './dialogs-and-notifications.component.html',
  styleUrls: ['./dialogs-and-notifications.component.scss'],
  providers: [Service]
})
export class DialogsAndNotificationsComponent {
  houses: House[];

  currentHouse: House;

  popupVisible = false;

  ADD_TO_FAVORITES = 'Add to Favorites';

  REMOVE_FROM_FAVORITES = 'Remove from Favorites';

  constructor(service: Service) {
    this.houses = service.getHouses();
    this.currentHouse = this.houses[0];
  }

  showHouse(house: House) {
    this.currentHouse = house;
    this.popupVisible = true;
  }

  changeFavoriteState(aw: any) {
    const favoriteState = !this.currentHouse.Favorite;
    const message = `This item has been ${
      favoriteState ? 'added to' : 'removed from'
    } the Favorites list!`;
    this.currentHouse.Favorite = favoriteState;

    notify({
      message,
      width: 450,
    },
    favoriteState ? 'success' : 'error',
    2000);
  }

}