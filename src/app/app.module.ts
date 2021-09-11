import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LiveComponent } from './components/live/live.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { LiveResultItemComponent } from './components/live/live-result-item/live-result-item.component';
import { LiveResultsComponent } from './components/live/live-results/live-results.component';
import { SeasonComponent } from './components/season/season.component';
import { SeasonResultsComponent } from './components/season/season-results/season-results.component';
import { SeasonResultsItemComponent } from './components/season/season-results-item/season-results-item.component';
import { DonationComponent } from './components/donation/donation.component';
import { DonationResultsComponent } from './components/donation/donation-results/donation-results.component';
import { DonationResultsItemComponent } from './components/donation/donation-results-item/donation-results-item.component';
import { MenuItemComponent } from './components/navigation/menu-item/menu-item.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    NavigationComponent,
    LiveResultItemComponent,
    LiveResultsComponent,
    SeasonComponent,
    SeasonResultsComponent,
    SeasonResultsItemComponent,
    DonationComponent,
    DonationResultsComponent,
    DonationResultsItemComponent,
    MenuItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
