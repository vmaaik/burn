import { Component, OnInit } from '@angular/core';
import {ResultService} from "../../service/result.service";
import {SeasonDonationSummary} from "../../interface/season-donation-summary";
import {AthleteSeasonResult} from "../../interface/athlete-season-result";
import {AthleteDonationResult} from "../../interface/athlete-donation-result";

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor(private resultService: ResultService) { }

  athleteDonationResults: AthleteDonationResult[];

  ngOnInit(): void {
    this.resultService.getDonationResults().subscribe((results: SeasonDonationSummary) => this.athleteDonationResults = results.athleteDonationResults);
  console.log(this.athleteDonationResults)
  }
}
