import {Component, OnChanges, OnInit} from '@angular/core';
import {AthleteSeasonResult} from "../../interface/athlete-season-result";
import {ResultService} from "../../service/result.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit, OnChanges{

  constructor(private resultService: ResultService) { }

  results: AthleteSeasonResult[];
  simulatedResults: AthleteSeasonResult[];
  firstLeagueResults: AthleteSeasonResult[];
  secondLeagueResults: AthleteSeasonResult[];

  ngOnInit(): void {
    this.resultService.getSeasonResults()
      .subscribe((results: AthleteSeasonResult[]) => this.results = results);
    this.resultService.getSimulatedSeasonResults().subscribe((results: AthleteSeasonResult[]) => this.simulatedResults = results);
  }

  ngOnChanges(): void {
    console.log(this.results);
    if (this.results) {
      this.firstLeagueResults = this.results.filter(r => r.league != 2);
      this.secondLeagueResults = this.results.filter(r => r.league != 1);
    }
  }
}
