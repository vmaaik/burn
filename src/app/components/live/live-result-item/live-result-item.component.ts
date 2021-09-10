import {Component, Input, OnInit} from '@angular/core';
import {MatchResult} from "../../../interface/match-result";

@Component({
  selector: 'app-live-result-item',
  templateUrl: './live-result-item.component.html',
  styleUrls: ['./live-result-item.component.css']
})
export class LiveResultItemComponent implements OnInit {

  constructor() { }

  @Input() matchResult: MatchResult;

  ngOnInit(): void {

  }

}
