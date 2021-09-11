import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LiveComponent} from "./components/live/live.component";
import {NavigationComponent} from "./components/navigation/navigation.component";


const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'live', component: LiveComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
