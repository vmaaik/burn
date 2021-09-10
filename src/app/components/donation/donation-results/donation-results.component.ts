import {Component, Input, OnInit} from '@angular/core';
import {AthleteDonationResult} from "../../../interface/athlete-donation-result";

@Component({
  selector: 'app-donation-results',
  templateUrl: './donation-results.component.html',
  styleUrls: ['./donation-results.component.css']
})
export class DonationResultsComponent implements OnInit {

  @Input() athletesDonationResults: AthleteDonationResult[];

  constructor() { }

  ngOnInit(): void {
  }

}
