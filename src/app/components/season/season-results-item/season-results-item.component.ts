import {Component, Input, OnInit} from '@angular/core';
import {AthleteSeasonResult} from "../../../interface/athlete-season-result";

@Component({
  selector: 'app-season-results-item',
  templateUrl: './season-results-item.component.html',
  styleUrls: ['./season-results-item.component.css']
})
export class SeasonResultsItemComponent implements OnInit {
  @Input() athleteResult: AthleteSeasonResult;

  constructor() { }

  ngOnInit(): void {
  }

}
