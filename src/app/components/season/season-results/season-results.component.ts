import {Component, Input, OnInit} from '@angular/core';
import {AthleteSeasonResult} from "../../../interface/athlete-season-result";

@Component({
  selector: 'app-season-results',
  templateUrl: './season-results.component.html',
  styleUrls: ['./season-results.component.css']
})
export class SeasonResultsComponent implements OnInit {

  constructor() {
  }

  @Input() seasonResults: AthleteSeasonResult[];

  ngOnInit(): void {

  }

}
