import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LiveComponent} from "./components/live/live.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {SeasonComponent} from "./components/season/season.component";
import {DonationComponent} from "./components/donation/donation.component";


const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'live', component: LiveComponent },
  { path: 'season', component: SeasonComponent },
  { path: 'donation', component: DonationComponent },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
