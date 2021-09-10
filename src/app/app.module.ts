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

@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    NavigationComponent,
    LiveResultItemComponent,
    LiveResultsComponent,
    SeasonComponent,
    SeasonResultsComponent,
    SeasonResultsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
