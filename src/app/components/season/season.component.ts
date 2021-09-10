import { Component, OnInit } from '@angular/core';
import {AthleteSeasonResult} from "../../interface/athlete-season-result";
import {ResultService} from "../../service/result.service";

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  constructor(private resultService: ResultService) { }

  results: AthleteSeasonResult[];
  simulatedResults: AthleteSeasonResult[];

  ngOnInit(): void {
    this.resultService.getSeasonResults().subscribe((results: AthleteSeasonResult[]) => this.results = results);
    this.resultService.getSimulatedSeasonResults().subscribe((results: AthleteSeasonResult[]) => this.simulatedResults = results);
  }

}
