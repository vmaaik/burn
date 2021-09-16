import {Injectable} from '@angular/core';

import {ApiService} from "../../shared/api.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private apiService: ApiService) {
  }

  getActiveMatchesResults() {
    return this.apiService.get(environment.matchResultsEndpoint);
  }

  getSeasonResults() {
    return this.apiService.get(environment.seasonResultsEndpoint);
  }

  getSimulatedSeasonResults() {
    return this.apiService.get(environment.simulatedSeasonResultsEndpoint);
  }

  getDonationResults() {
    return this.apiService.get(environment.seasonDonationResults);
  }


}
