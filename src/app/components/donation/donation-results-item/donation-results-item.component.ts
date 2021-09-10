import {Component, Input, OnInit} from '@angular/core';
import {AthleteDonationResult} from "../../../interface/athlete-donation-result";

@Component({
  selector: 'app-donation-results-item',
  templateUrl: './donation-results-item.component.html',
  styleUrls: ['./donation-results-item.component.css']
})
export class DonationResultsItemComponent implements OnInit {

  @Input() athletesDonationResult: AthleteDonationResult;

  constructor() { }

  ngOnInit(): void {
  }

}
