import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxButtonModule, DxPieChartModule, DxPopoverModule, DxPopupModule, DxTemplateModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevExtremeComponent } from './dev-extreme/dev-extreme.component';
import { DialogsAndNotificationsComponent } from './dev-extreme/dialogs-and-notifications/dialogs-and-notifications.component';
import { PrimeNGComponent } from './prime-ng/prime-ng.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    DevExtremeComponent,
    DialogsAndNotificationsComponent,
    PrimeNGComponent,
  ],
  imports: [
    AppRoutingModule,
    DxPieChartModule,
    BrowserModule,
    DxTemplateModule,
    ChartModule,
    DxButtonModule,
    DxPopupModule,
    DxPopoverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
