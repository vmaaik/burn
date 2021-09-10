import { Component, OnInit } from '@angular/core';
import {ResultService} from "../../../service/result.service";
import {MatchResult} from "../../../interface/match-result";

@Component({
  selector: 'app-live-results',
  templateUrl: './live-results.component.html',
  styleUrls: ['./live-results.component.css']
})
export class LiveResultsComponent implements OnInit {

  constructor(private resultService: ResultService) { }

  matchResults: MatchResult[] = [];

  ngOnInit(): void {
    this.resultService.getActiveMatchesResults()
      .subscribe((results: MatchResult[]) => this.matchResults = results);
  }

}
