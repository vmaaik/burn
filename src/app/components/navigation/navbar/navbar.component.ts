import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router, RouterEvent} from "@angular/router";
import {NavigationEvent} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  title: string;
  titlesMap: Map<string, string> = new Map([
    ["/", 'Liga'],
    ["/live", 'Na żywo'],
    ["/season", 'Sezon'],
    ["/stats", 'Statystyki'],
    ["/donation", 'Zbiórka']
  ]);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.title = this.mapUrlToTile(event.url);
      }
    })
  }

  private mapUrlToTile(url: string): string {
    return <string>this.titlesMap.get(url);
  }


}
